import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import icons from "../lib/icons";
import { robotoRegular } from "../lib/fonts";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation";
import { getUser } from "../lib/utils";

interface DueAmountCardProps {
  user: DueLoanClient;
}

const DueAmountCard = ({ user }: DueAmountCardProps) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const userDetails = getUser(user.Identifier)
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className="py-4 px-2 bg-blueLight items-center flex-row justify-between rounded-lg shadow-sm shadow-black"
      onPress={() => {
        navigation.navigate("ClientDueAmount", { user });
      }}
    >
      <View className="gap-2">
        <Text style={robotoRegular} className="text-black">
          Customer ID : {user.Identifier}
        </Text>
        <Text style={robotoRegular} className="text-black">
          Name : {userDetails?.Name}
        </Text>
        <Text style={robotoRegular} className="text-black">
          Phone No : {userDetails?.Number}
        </Text>
        <Text style={robotoRegular} className="text-black">
          Due Amount : {user.Amount - user.Completed * user.Emi}
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
