import { View, Text, TouchableWithoutFeedback } from "react-native";
import React, { Component, useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { robotoMedium, robotoRegular } from "../lib/fonts";
import SwipeableTabs from "react-native-swipe-tabs";
import DueAmount from "../components/tabs/HomeTabs/DueAmount";
import PropertyVerification from "../components/tabs/HomeTabs/PropertyVerification";
import KycProcess from "../components/tabs/HomeTabs/KycProcess";
import TabsLabel from "../components/TabsLabel";
import ClientContext from "../context/ClientContext";

const Home = () => {
  const allClients = useContext(ClientContext)
  const [selectedHomeTabIndex, setselectedHomeTabIndex] = useState(0);
  const tabsItem = [
    {
      name: "Due Amount",
      component: DueAmount,
      clients: allClients?.dueAmountClients
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
      <View className="bg-skyBlue flex-row justify-between py-2 px-3 mt-4 mb-2">
        <Text style={robotoMedium} className="text-black">
          Today's Task
        </Text>
        <Text style={robotoRegular} className="text-[#333333]">
          15-07-2024
        </Text>
      </View>

      <View className="flex-row justify-between py-1">
        {tabsItem.map((item, index) => {
          return (
            <TabsLabel
              name={item.name}
              index={index}
              key={index}
              selectedTabIndex={selectedHomeTabIndex}
              setter={setselectedHomeTabIndex}
            />
          );
        })}
      </View>

      <SwipeableTabs
        onSwipe={(x) => setselectedHomeTabIndex(x)}
        selectedIndex={selectedHomeTabIndex}
      >
        {tabsItem.map((item, index) => {
          // @ts-ignore
          return <item.component key={index} clients={item.clients}/>;
        })}
      </SwipeableTabs>
    </SafeAreaView>
  );
};

export default Home;
