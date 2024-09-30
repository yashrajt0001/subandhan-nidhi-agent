import {
  View,
  Text,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../assets/images/Logo.png";
import { Input } from "../components/ui/Input";
import { CustomButton } from "../components/ui/CustomButton";
import {robotoMedium} from '../lib/fonts'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAuth } from "../context/Auth";

const Login = ({navigation}: NativeStackScreenProps<any, any>) => {
  const [userId, setUserId] = useState("91394774");
  const [password, setPassword] = useState("XJZwNDyOVrWr8q5");

  const {signIn} = useAuth()

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
      <SafeAreaView className="bg-white h-full px-4 py-8 flex justify-between">
        <View>
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
              onchangeText={(text)=> {setUserId(text); console.log(text)}}
            />
            <Input
              style={{ fontFamily: "Roboto", fontWeight: "500" }}
              viewClasses="mt-2"
              label="Password"
              labelClasses="font-medium text-blackPrimary"
              placeholder="Enter Password"
              placeholderTextColor="#0166E4"
              value={password}
              onchangeText={(text)=> setPassword(text)}
            />
          </View>
          <View>
            <CustomButton
              textColor={"link"}
              title="Forgot Password"
              className="mt-4"
              theme="link"
              textStyle={{ fontFamily: "Inter-Medium", fontWeight: "400" }}
              style={{alignSelf: 'flex-start'}}
            />
          </View>
        </View>
        <View className="">
          <CustomButton onPress={()=> signIn(userId, password)} title="Log in" theme='default' textColor='white' textClasses="text-[17px]" textStyle={robotoMedium}/>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
