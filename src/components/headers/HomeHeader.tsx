import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Logo from "../../assets/images/Logo.png";
import icons from "../../lib/icons";

const HomeHeader = () => {
  return (
    <View className="flex-row items-center justify-between w-full">
      <View className="flex-row items-center gap-4">
        <Image source={Logo} resizeMode="contain" className="w-10 h-10" />
        <Text
          className="text-[20px] text-[#111111]"
          style={{ fontFamily: "Roboto-Bold", fontWeight: "600" }}
        >
          Hi Agent
        </Text>
      </View>
      <View className="flex-row gap-4">
        <TouchableOpacity className="p-3 rounded-full border border-[lightSKyBlue]">
          <Image source={icons.Bell} className="w-4 h-4"/>
        </TouchableOpacity>
        <TouchableOpacity className="p-3 rounded-full border border-[lightSKyBlue]">
          <Image source={icons.Search} className="w-4 h-4"/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
