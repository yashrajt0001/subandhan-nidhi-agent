import { View, Text, FlatList } from "react-native";
import React from "react";
import DueAmountCard from "../DueAmountCard";

const DueAmount = ({}) => {
  const dueAmounts = [
    {
      id: "1",
      name: "sdcsd",
      phone: "34334444343",
      dueAmount: 4545,
    },
    {
      id: "43",
      name: "csdcc",
      phone: "34334444343",
      dueAmount: 4545,
    },
    {
      id: "acs",
      name: "sdcsd",
      phone: "34334444343",
      dueAmount: 4545,
    },
    {
      id: "cscsc",
      name: "csdcc",
      phone: "34334444343",
      dueAmount: 4545,
    },
    {
      id: "ascsacac",
      name: "sdcsd",
      phone: "34334444343",
      dueAmount: 4545,
    },
    {
      id: "ascas",
      name: "csdcc",
      phone: "34334444343",
      dueAmount: 4545,
    },
  ];
  return (
    <View className="mr-8">
        <FlatList
          keyExtractor={item => item.id}
          data={dueAmounts}
          renderItem={({ item }) => (
            <DueAmountCard
              id={item.id}
              name={item.name}
              dueAmount={item.dueAmount}
              phone={item.phone}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 120, paddingTop: 10, gap: 10}}
        />
    </View>
  );
};

export default DueAmount;
