import { View } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SwipeableTabs from "react-native-swipe-tabs";
import TabsLabel from "../components/TabsLabel";
import ClientContext from "../context/ClientContext";
import HistoryPropertyVerification from "../components/tabs/HistoryTabs/HistoryPropertyVerification";
import HistoryKycProcess from "../components/tabs/HistoryTabs/HistoryKycProcess";
import HistoryDueAmount from "../components/tabs/HistoryTabs/HistoryDueAmount";


const History = () => {
  const allClients = useContext(ClientContext);
  const [selectedTabIndex, setselectedTabIndex] = useState(0);
  const tabsItem = [
    {
      name: "Due Amount",
      component: HistoryDueAmount,
      clients: allClients?.historyDueAmountClients,
    },
    {
      name: "Property Verification",
      component: HistoryPropertyVerification,
      clients: allClients?.historyPropertyClients,
    },
    {
      name: "KYC Process",
      component: HistoryKycProcess,
      clients: allClients?.historyKycClients,
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
          return <item.component key={index} clients={item.clients} />;
        })}
      </SwipeableTabs>
    </SafeAreaView>
  );
};

export default History;
