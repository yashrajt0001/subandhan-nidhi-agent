import { View, Text, FlatList } from "react-native";
import React from "react";
import DueAmountCard from "../../DueAmountCard";

interface DueLoanProps {
  clients?: DueLoanClients;
}

const DueLoan = ({ clients: dueLoanClients }: DueLoanProps) => {
  return (
    <View className="mr-8">
      {dueLoanClients ? (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={dueLoanClients}
          renderItem={({ item }) => <DueAmountCard user={item} />}
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

export default DueLoan;
