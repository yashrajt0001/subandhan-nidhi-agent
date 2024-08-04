import { View, Text, FlatList } from "react-native";
import React from "react";
import HistoryDueAmountCard from "../../Cards/HistoryCard/HistoryDueAmountCard";

interface DueAmountProps {
  clients?: HistoryDueAmountClients;
}

const DueAmount = ({ clients: dueAmountClients }: DueAmountProps) => {
  return (
    <View className="mr-8">
      {dueAmountClients ? (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={dueAmountClients}
          renderItem={({ item }) => <HistoryDueAmountCard user={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 100,
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
