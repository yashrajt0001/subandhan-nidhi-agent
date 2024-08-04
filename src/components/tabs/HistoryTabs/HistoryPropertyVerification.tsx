import { View, Text, FlatList } from "react-native";
import React from "react";
import HistoryPropertyClientCard from "../../Cards/HistoryCard/PropertyClientCard";

interface HistoryPropertyVerificationProps {
  clients?: HistoryPropertyClients;
}

const HistoryPropertyVerification = ({
  clients: propertyClients,
}: HistoryPropertyVerificationProps) => {
  return (
    <View className="mr-8">
      {propertyClients ? (
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={propertyClients}
          renderItem={({ item }) => <HistoryPropertyClientCard user={item} />}
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

export default HistoryPropertyVerification;
