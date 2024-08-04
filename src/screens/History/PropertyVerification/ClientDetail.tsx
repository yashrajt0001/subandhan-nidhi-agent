import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../../components/headers/CustomHeader";
import Logo from "../../../assets/images/Logo.png";
import { robotoRegular } from "../../../lib/fonts";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigation";
import icons from "../../../lib/icons";

type HistoryPropertyClientDetailsProps = StackScreenProps<RootStackParamList, 'HistoryPropertyClientDetails'>

const HistoryPropertyClientDetail = ({route}: HistoryPropertyClientDetailsProps) => {
  const {user} = route.params
  return (
    <SafeAreaView className="bg-white h-full px-4">
      <CustomHeader name="Client Due Amount" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="">
          <View className="bg-skyBlue h-[120px] rounded-lg"></View>
          <View
            className="absolute top-[50%] left-[50%] transform -translate-x-[60px]"
            style={{ zIndex: 100 }}
          >
            <Image
              source={Logo}
              className="w-[120px] h-[120px] rounded-full"
              resizeMode="contain"
            />
          </View>
        </View>
        <View className="gap-y-2 bg-skyBlue px-4 py-2 rounded-lg mt-24">
          <Text style={robotoRegular} className="text-black">
            Customer ID :{user.customerId}
          </Text>
          <Text style={robotoRegular} className="text-black">
            Name : {user.name}
          </Text>
          <Text style={robotoRegular} className="text-black">
            Age : {user.age}
          </Text>
          <Text style={robotoRegular} className="text-black">
            Phone No : {user.phone}
          </Text>
          <View className="text-black flex-row justify-between items-center">
            <Text className="text-black" style={robotoRegular}>
              Status :
            </Text>
            <Image
              source={user.status ? icons.CheckCircle2 : icons.AlertCircle}
              className="w-3 h-3"
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HistoryPropertyClientDetail;
