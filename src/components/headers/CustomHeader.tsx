import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import icons from "../../lib/icons";
import { robotoMedium } from "../../lib/fonts";

const CustomHeader = ({ name, search }: { name: string; search?: boolean }) => {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-between w-full items-center py-3">
      <View className="flex-row items-center gap-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image className="w-8 h-8" source={icons.ArrowLeft} />
        </TouchableOpacity>
        <Text style={robotoMedium} className="text-base text-[#0C0C0C]">
          {name}
        </Text>
      </View>
      {search && (
        <TouchableOpacity
          activeOpacity={0.5}
          className="rounded-full p-2.5 border border-skyBlue"
        >
          <Image
            source={icons.Search}
            className="w-5 h-5"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomHeader;
