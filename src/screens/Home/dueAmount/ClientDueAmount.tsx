import { View, Text, ScrollView } from "react-native";
import React from "react";
import type { StackScreenProps } from "@react-navigation/stack";
import { AppStackParamList } from "../../../navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../../components/headers/CustomHeader";
import { robotoMedium } from "../../../lib/fonts";
import icons from "../../../lib/icons";
import OptionButton from "../../../components/ui/OptionButton";
import { CustomButton } from "../../../components/ui/CustomButton";
import ClientDetails from "../../../components/clientDetails/DueAmountClientDetails";

type ClientDueAmountProps = StackScreenProps<
  AppStackParamList,
  "ClientDueAmount"
>;

const ClientDueAmount = ({ navigation, route }: ClientDueAmountProps) => {
  const { user } = route.params;
  console.log(user)
  return (
    <SafeAreaView className="bg-white h-full px-4">
      <CustomHeader name="Client Due Amount" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ClientDetails user={user} />
        <View className="mt-6 p-8 justify-between items-center">
          <View className="flex-row justify-between w-full">
            <OptionButton icon={icons.Envelope} name="Send SMS Reminder" />
            <OptionButton icon={icons.LinkBroken} name="Send Payment Link" />
          </View>
          <View className="flex-row justify-between w-full mt-10">
            <OptionButton icon={icons.PhoneCall} name="Call to Client" />
            <OptionButton icon={icons.Location} name="Visit Client" />
          </View>
        </View>

        <View className="gap-6 mb-4">
          <CustomButton
            onPress={() => {
              navigation.navigate("PreviousPayments", { user });
            }}
            textStyle={robotoMedium}
            theme="outline"
            textColor="red"
            title="View Previous Payments"
            textClasses="text-base"
          />
          <CustomButton
            textStyle={robotoMedium}
            theme="default"
            textColor="white"
            title="Update to Client"
            textClasses="text-base"
            onPress={()=>{navigation.navigate("UpdateToClient", {user})}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClientDueAmount;
