import { View, Text, TouchableWithoutFeedback } from "react-native";
import React, { Component, useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { robotoMedium, robotoRegular } from "../lib/fonts";
import SwipeableTabs from "react-native-swipe-tabs";
import PropertyVerification from "../components/tabs/HomeTabs/PropertyVerification";
import KycProcess from "../components/tabs/HomeTabs/KycProcess";
import TabsLabel from "../components/TabsLabel";
import ClientContext from "../context/ClientContext";
import DueAmount from "../components/tabs/HistoryTabs/HistoryDueAmount";

const History = () => {
  const allClients = useContext(ClientContext)
  const [selectedTabIndex, setselectedTabIndex] = useState(0);
  const tabsItem = [
    {
      name: "Due Amount",
      component: DueAmount,
      clients: allClients?.historyDueAmountClients
    },
    {
      name: "Property Verification",
      component: PropertyVerification,
      clients: allClients?.propertyClients
    },
    {
      name: "KYC Process",
      component: KycProcess,
      clients: allClients?.kycClients
    },
  ];
  return (
    <SafeAreaView className="bg-white h-full px-4">
      <View className="flex-row justify-between py-1">
        {tabsItem.map((item, index) => {
          return (
            <TabsLabel
              name={item.name}
              index={index}
              key={index}
              selectedTabIndex={selectedTabIndex}
              setter={setselectedTabIndex}
            />
          );
        })}
      </View>

      <SwipeableTabs
        onSwipe={(x) => setselectedTabIndex(x)}
        selectedIndex={selectedTabIndex}
      >
        {tabsItem.map((item, index) => {
          // @ts-ignore
          return <item.component key={index} clients={item.clients}/>;
        })}
      </SwipeableTabs>
    </SafeAreaView>
  );
};

export default History;
