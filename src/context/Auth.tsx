import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../lib/axios.utils";
import { HOST } from "../../env";

type AuthContextData = {
  accessToken?: string;
  loading: boolean;
  signIn(userId: string, password: string): Promise<void>;
  signOut(): void;
};

//Create the Auth Context with the data type specified
//and a empty object
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string>();

  //the AuthContext start with loading equals true
  //and stay like this, until the data be load from Async Storage
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Every time the App is opened, this provider is rendered
    //and call de loadStorage function.
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      //Try get the data from Async Storage
      const accessToken = await AsyncStorage.getItem("accessToken");
      if (accessToken) {
        setAccessToken(accessToken);
      }
    } catch (error) {
    } finally {
      //loading finished
      setLoading(false);
    }
  }

  const signIn = async (userId: string, password: string) => {
    const payload = {
      data: {
        Identifier: userId,
        Password: password,
      },
    };
    try {
      const { data } = await axiosInstance.post(
        `${HOST}/agent/classic/Login`,
        payload
      );
      console.log("data:", data)
      await AsyncStorage.setItem("accessToken", data.credentials.access);
      await AsyncStorage.setItem("userId", userId)
      setAccessToken(data.credentials.access);
      console.log(data.credentials.access);
    } catch (error: any) {
      console.log("error:", error.response.data)
    }
  };

  const signOut = async () => {
    setAccessToken(undefined);
    await AsyncStorage.removeItem("accessToken");
  };

  return (
    //This component will be used to encapsulate the whole App,
    //so all components will have access to the Context
    <AuthContext.Provider value={{ accessToken, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

//A simple hooks to facilitate the access to the AuthContext
// and permit components to subscribe to AuthContext updates
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthContext, AuthProvider, useAuth };
