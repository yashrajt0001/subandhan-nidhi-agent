import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import CustomHeader from "../../../components/headers/CustomHeader";
import KycVerifiedClientCard from "../../../components/Cards/HistoryCard/KycVerifiedClientCard";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigation";
import { robotoBold } from "../../../lib/fonts";
import DocumentCard from "../../../components/Cards/HomeCard/DocumentCard";

type VerifiedDocumentsProps = StackScreenProps<
  RootStackParamList,
  "VerifiedDocuments"
>;

const VerifiedDocuments = ({ route }: VerifiedDocumentsProps) => {
  const { user } = route.params;
  return (
    <SafeAreaView className="bg-white h-full px-4">
      <CustomHeader name="Property Information" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="pb-10">
          <Text style={robotoBold} className="text-black my-2 text-base">
            User Details
          </Text>
          <KycVerifiedClientCard user={user} />
          <Text style={robotoBold} className="text-black mt-6 mb-4 text-base">
            Uploaded Details
          </Text>
          <View>
            <DocumentCard title="Pan card" image="/" />
            <DocumentCard title="Adhaar card" image="/" />
            <DocumentCard title="Signature" image="/" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerifiedDocuments;
