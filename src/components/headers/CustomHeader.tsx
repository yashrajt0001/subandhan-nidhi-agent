import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import icons from "../../lib/icons";
import { robotoMedium } from "../../lib/fonts";

const CustomHeader = ({ name }: { name: string }) => {
  const navigation = useNavigation();
  return (
    <View className="flex-row items-center py-3 gap-2">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image className="w-8 h-8" source={icons.ArrowLeft} />
      </TouchableOpacity>
      <Text style={robotoMedium} className="text-base text-[#0C0C0C]">{name}</Text>
    </View>
  );
};

export default CustomHeader;
