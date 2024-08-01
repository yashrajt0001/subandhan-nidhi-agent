import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import SwitchableButton from "../ui/SwitchableButton";
import { robotoBold } from "../../lib/fonts";
import KycVerifiedClientCard from "../KycVerifiedClientCard";
import KycVerifyClientCard from "../KycVerifyClientCard";

interface KycProcessProps {
  clients?: KycClients;
}

const KycProcess = ({ clients: kycClients }: KycProcessProps) => {
  const [activeTab, setActiveTab] = useState<"verified" | "verify">("verify");
  return (
    <View className="mr-8">
      <View className="flex-row py-2">
        <SwitchableButton
          className="mr-6"
          text="Verify Documents"
          isActive={activeTab === "verify" ? true : false}
          setter={() => setActiveTab("verify")}
        />
        <SwitchableButton
          text="Verified Documents"
          isActive={activeTab === "verified" ? true : false}
          setter={() => setActiveTab("verified")}
        />
      </View>
      {activeTab === "verify" ? (
        kycClients?.verifyClients ? (
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={kycClients.verifyClients}
            renderItem={({ item }) => <KycVerifyClientCard user={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 170,
              paddingTop: 10,
              gap: 10,
            }}
          />
        ) : (
          <View className="items-center justify-center m-10">
            <Text className="text-slate-400">No clients</Text>
          </View>
        )
      ) : (
        kycClients?.verifiedClients ? (
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={kycClients.verifiedClients}
            renderItem={({ item }) => <KycVerifiedClientCard user={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 170,
              paddingTop: 10,
              gap: 10,
            }}
          />
        ) : (
          <View className="items-center justify-center m-10">
            <Text className="text-slate-400">No clients</Text>
          </View>
        )
      )}
      <Text className="text-black mt-4" style={robotoBold}>
        User Details
      </Text>
    </View>
  );
};

export default KycProcess;
