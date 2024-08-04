import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/headers/CustomHeader";
import { ScrollView } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation";
import RespondedClientDetails from "../../components/clientDetails/RespondedClientDetails";
import icons from "../../lib/icons";
import OptionButton from "../../components/ui/OptionButton";

type RespondedClientDetailsScreenProps = StackScreenProps<
  RootStackParamList,
  "RespondedClientDetailsScreen"
>;

const RespondedClientDetailsScreen = ({
  route,
}: RespondedClientDetailsScreenProps) => {
  const { user } = route.params;
  return (
    <SafeAreaView className="bg-white h-full px-4">
      <CustomHeader name="Client Details" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RespondedClientDetails user={user} />
        <View className="mt-6 p-8 justify-between items-center">
          <View className="flex-row justify-between items-center w-full">
            <OptionButton icon={icons.Envelope} name="Send SMS Reminder" />
            <OptionButton icon={icons.LinkBroken} name="Send Payment Link" />
          </View>
          <View className="flex-row justify-between w-full mt-10">
            <OptionButton icon={icons.PhoneCall} name="Call to Client" />
            <OptionButton icon={icons.Location} name="Visit Client" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RespondedClientDetailsScreen;
