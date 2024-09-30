import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import CryptoJS from "crypto-js";
import { ACCESS_AGENT, ACCESS_HASH, PHRASE, SECRET } from "../../env";

class Crypt {
  static encrypt = async (data) => {
    try {
      const ciphertext = await CryptoJS.AES.encrypt(data, SECRET).toString();
      return ciphertext;
    } catch (error) {
      return Promise.reject(new Error("Encryption failed"));
    }
  };

  static decrypt = async (data) => {
    try {
      const bytes = await CryptoJS.AES.decrypt(data, SECRET);
      const plaintext = bytes.toString(CryptoJS.enc.Utf8);
      return plaintext;
    } catch (error) {
      return Promise.reject(new Error("Decryption failed"));
    }
  };
}

class Packet {
  static pack = async (data) => {
    if (PHRASE === "Development") {
      return data;
    }
    const jsonString = JSON.stringify(data);
    const encryptedData = await Crypt.encrypt(jsonString);
    return { data: encryptedData };
  };

  static extract = async (data) => {
    if (PHRASE === "Development") {
      return data;
    }
    const decryptedData = await Crypt.decrypt(data);
    return JSON.parse(decryptedData);
  };
}

// Create an Axios instance
const axiosInstance = axios.create();

// Request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      if (config.data) {
        const packedData = await Packet.pack(config.data);
        config.data = packedData;
      }
      // config.headers["Content-Type"] = "multipart/form-data"
      // config.headers["Accept"] = "application/json"
      config.headers["Access-Hash"] = ACCESS_HASH;
      if (AsyncStorage.getItem("accessToken")) {
        config.headers["accessToken"] = AsyncStorage.getItem("accessToken");
      }
      // Determine which role hash to add based on the endpoint
      config.headers["Role-Hash"] = ACCESS_AGENT;
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  async (response) => {
    try {
      if (response.data) {
        const extractedData = await Packet.extract(response.data.data);
        response.data = extractedData;
      }
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
