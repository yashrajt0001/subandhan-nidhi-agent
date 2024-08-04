import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import type { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../../components/headers/CustomHeader";
import PropertyClientDetails from "../../../components/clientDetails/PropertyClientDetails";
import Checkbox from "../../../components/ui/Checkbox";
import { CustomButton } from "../../../components/ui/CustomButton";

type PropertyInformation = StackScreenProps<
  RootStackParamList,
  "PropertyInformation"
>;

const PropertyInformation = ({ navigation, route }: PropertyInformation) => {
  const [isReceivedDocument, setIsReceivedDocument] = useState(false);
  const [isVerifiedDocument, setIsVerifiedDocument] = useState(false);
  const [isSiteVisited, setIsSiteVisited] = useState(false);
  const [isSentToAdmin, setIsSentToAdmin] = useState(false);
  const { user } = route.params;
  return (
    <SafeAreaView className="bg-white h-full px-4">
      <CustomHeader name="Property Information" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <PropertyClientDetails user={user} />
        <View className="mt-10 px-4">
          <Checkbox
            isChecked={isReceivedDocument}
            setter={setIsReceivedDocument}
            text="Received Documents Through What’s app"
          />
          <Checkbox
            isChecked={isVerifiedDocument}
            setter={setIsVerifiedDocument}
            text="Verified the Documents"
          />
          <Checkbox
            isChecked={isSiteVisited}
            setter={setIsSiteVisited}
            text="Site Visited"
          />
          <Checkbox
            isChecked={isSentToAdmin}
            setter={setIsSentToAdmin}
            text="Documents sent to Admin"
          />
        </View>
        <CustomButton
          theme="default"
          title="Update to Admin"
          className="mt-6"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PropertyInformation;
