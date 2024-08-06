import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import SwitchableButton from "../../ui/SwitchableButton";
import { robotoBold } from "../../../lib/fonts";
import KycVerifiedClientCard from "../../Cards/HistoryCard/HistoryKycClientCard";
import KycVerifyClientCard from "../../Cards/HomeCard/KycVerifyClientCard";
import HistoryKycClientCard from "../../Cards/HistoryCard/HistoryKycClientCard";

interface HistoryKycProcessProps {
  clients?: HistoryKycClients;
}

const HistoryKycProcess = ({ clients: kycClients }: HistoryKycProcessProps) => {
  return (
    <View className="mr-8">
      {kycClients ? (
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={kycClients}
          renderItem={({ item }) => <HistoryKycClientCard user={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 120,
            paddingTop: 10,
            gap: 10,
          }}
        />
      ) : (
        <View className="items-center justify-center m-10">
          <Text className="text-slate-400">No clients</Text>
        </View>
      )}
      <Text className="text-black mt-4" style={robotoBold}>
        User Details
      </Text>
    </View>
  );
};

export default HistoryKycProcess;
