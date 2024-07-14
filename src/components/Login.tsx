import {
  View,
  Text,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../assets/images/Logo.png";
import { Input } from "./ui/Input";
import { CustomButton } from "./ui/CustomButton";

const Login = () => {
  const [userId, setUserId] = useState("");

  const onchangeText = (text: string) => {
    setUserId(text);
  };

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
      <SafeAreaView className="bg-white h-full px-4 py-8">
        <View className="pt-[15%] flex justify-center items-center gap-2">
          <Image className="h-24 w-24" source={Logo} resizeMode="contain" />
          <Text
            className="text-blackPrimary"
            style={{
              fontFamily: "Roboto-Bold",
              fontWeight: "800",
              fontSize: 24,
            }}
          >
            Subandhan Nidhi
          </Text>
        </View>
        <View className="mt-[20%]">
          <Input
            style={{ fontFamily: "Roboto", fontWeight: "500" }}
            className=""
            label="UserID"
            labelClasses="font-medium text-blackPrimary"
            placeholder="Enter Your UserID"
            placeholderTextColor="#0166E4"
            value={userId}
            onchangeText={onchangeText}
          />
          <Input
            style={{ fontFamily: "Roboto", fontWeight: "500" }}
            viewClasses="mt-2"
            label="Password"
            labelClasses="font-medium text-blackPrimary"
            placeholder="Enter Password"
            placeholderTextColor="#0166E4"
            value={userId}
            onchangeText={onchangeText}
          />
        </View>
        <View>
          <CustomButton className="mt-2">
            <Text
              className="text-bluePrimary text-base"
              style={{ fontFamily: "Inter-Medium", fontWeight: "400" }}
            >
              Forgot Password
            </Text>
          </CustomButton>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
