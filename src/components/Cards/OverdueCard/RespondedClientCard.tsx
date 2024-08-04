import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { OverdueScreenNavigationProp } from "../../../navigation";
import { robotoMedium } from "../../../lib/fonts";
import icons from "../../../lib/icons";

interface RespondedClientCard {
  user: OverdueRespondedClient;
}

const RespondedClientCard = ({ user }: RespondedClientCard) => {
  const navigation = useNavigation<OverdueScreenNavigationProp>();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className="py-4 px-2 bg-blueLight items-center flex-row justify-between rounded-lg shadow-sm shadow-black"
      onPress={() => {
        navigation.navigate("RespondedClientDetailsScreen", { user });
      }}
    >
      <View className="gap-2">
        <Text style={robotoMedium} className="text-black">
          Customer ID :{user.customerId}
        </Text>
        <Text style={robotoMedium} className="text-black">
          Name : {user.name}
        </Text>
        <Text style={robotoMedium} className="text-black">
          Phone No : {user.phone}
        </Text>
        <Text style={robotoMedium} className="text-black">
          Type of loan : {user.loanType}
        </Text>
        <Text style={robotoMedium} className="text-black">
          Due Amount : {user.dueAmount}
        </Text>
        <Text style={robotoMedium} className="text-black">
          Date of repaying :{" "}
          {user.rePayingDate.getDate().toString().padStart(2, "0") +
            "/" +
            (user.rePayingDate.getMonth() + 1).toString().padStart(2, "0") +
            "/" +
            user.rePayingDate.getFullYear().toString().slice(-2)}
        </Text>
      </View>
      <View
        className="justify-center gap-y-2 mr-4 py-2"
        style={{ alignSelf: "stretch" }}
      >
        <TouchableOpacity activeOpacity={0.5} className="p-1">
          <Image
            source={icons.PhoneCall}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View className="h-[1px] rounded-lg bg-[#3C3C3C33]" />
        <TouchableOpacity activeOpacity={0.5} className="p-1">
          <Image
            source={icons.Location}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default RespondedClientCard;
