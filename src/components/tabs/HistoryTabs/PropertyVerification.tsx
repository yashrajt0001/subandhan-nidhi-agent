import { View, Text, FlatList } from "react-native";
import React from "react";
import DueAmountCard from "../../Cards/HistoryCard/HistoryDueAmountCard";
import PropertyClientCard from "../../Cards/HistoryCard/PropertyClientCard";

interface PropertyVerificationProps {
  clients?: PropertyClients;
}

const PropertyVerification = ({
  clients: dueAmountClients,
}: PropertyVerificationProps) => {
  return (
    <View className="mr-8">
      {dueAmountClients ? (
        <FlatList
          keyExtractor={(item) => item.customerId}
          data={dueAmountClients}
          renderItem={({ item }) => <PropertyClientCard user={item} />}
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
    </View>
  );
};

export default PropertyVerification;
