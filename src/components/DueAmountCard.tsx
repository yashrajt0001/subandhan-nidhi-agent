import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import React from "react";
import icons from "../lib/icons";
import { robotoRegular } from "../lib/fonts";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp, RootStackParamList, TabParamList } from "../navigation";
import {  StackScreenProps } from "@react-navigation/stack";

interface DueAmountCardProps {
  id: string;
  name: string;
  phone: string;
  dueAmount: number;
}

const DueAmountCard = ({id, name, phone, dueAmount}: DueAmountCardProps) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <TouchableOpacity
    activeOpacity={0.9}
      className="py-4 px-2 bg-blueLight items-center flex-row justify-between rounded-lg shadow-sm shadow-black"
      style={{backgroundColor: "#e6f0fc"}}
      onPress={()=>{navigation.navigate('ClientDueAmount', {user: {name: "yashraj"}})}}
    >
      <View className="gap-2">
        <Text style={robotoRegular} className="text-black">
          Customer ID : 231
        </Text>
        <Text style={robotoRegular} className="text-black">
          Name : yashraj
        </Text>
        <Text style={robotoRegular} className="text-black">
          Phone No : yashraj
        </Text>
        <Text style={robotoRegular} className="text-black">
          Due Amount : 1000
        </Text>
      </View>
      <View
        className="justify-between mr-4 py-2"
        style={{ alignSelf: "stretch" }}
      >
        <TouchableOpacity activeOpacity={0.5}>
          <Image source={icons.Message} className="w-6 h-6" />
        </TouchableOpacity>
        <View className="h-[1px] rounded-lg bg-[#3C3C3C]" />
        <TouchableOpacity activeOpacity={0.5}>
          <Image source={icons.PhoneCall} className="w-6 h-6" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default DueAmountCard;
