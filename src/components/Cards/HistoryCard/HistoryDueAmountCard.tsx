import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import icons from "../../../lib/icons";
import { robotoRegular } from "../../../lib/fonts";
import { useNavigation } from "@react-navigation/native";
import {
  HistoryScreenNavigationProp,
  HomeScreenNavigationProp,
} from "../../../navigation";

interface HistoryDueAmountCardProps {
  user: HistoryDueAmountClient;
}

const HistoryDueAmountCard = ({ user }: HistoryDueAmountCardProps) => {
  const navigation = useNavigation<HistoryScreenNavigationProp>();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className="p-2 bg-blueLight items-center flex-row justify-between rounded-lg shadow-sm shadow-black"
      onPress={() => {
        navigation.navigate("HistoryClientDetails", { user });
      }}
    >
      <View className="gap-2">
        <Text style={robotoRegular} className="text-black">
          Customer ID :{user.customerId}
        </Text>
        <Text style={robotoRegular} className="text-black">
          Name : {user.name}
        </Text>
        <Text style={robotoRegular} className="text-black">
          Phone No : {user.phone}
        </Text>
        <View className="text-black flex-row justify-between w-full pr-6 items-center">
          <Text className="text-black" style={robotoRegular}>Recovery Status :</Text>
          <Image
            source={user.status ? icons.CheckCircle2 : icons.AlertCircle}
            className="w-3 h-3"
            resizeMode="contain"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HistoryDueAmountCard;
