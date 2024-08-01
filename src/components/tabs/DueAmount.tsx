import { View, Text, FlatList } from "react-native";
import React from "react";
import DueAmountCard from "../DueAmountCard";

interface DueAmountProps {
  clients?: DueAmountClients
}

const DueAmount = ({clients: dueAmountClients}: DueAmountProps) => {
  return (
    <View className="mr-8">
      {dueAmountClients ? (
        <FlatList
          keyExtractor={(item) => item.customerId}
          data={dueAmountClients}
          renderItem={({ item }) => (
            <DueAmountCard
              user={item}
            />
          )}
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

export default DueAmount;
