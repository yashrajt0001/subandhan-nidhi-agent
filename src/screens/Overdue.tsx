import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ClientContext from "../context/ClientContext";
import RespondedClient from "../components/tabs/OverdueTabs/RespondedClients";
import UnrespondedClients from "../components/tabs/OverdueTabs/UnrespondedClients";
import { View } from "react-native";
import TabsLabel from "../components/TabsLabel";
import SwipeableTabs from "react-native-swipe-tabs";

const Overdue = () => {
  const allClients = useContext(ClientContext);
  const [selectedTabIndex, setselectedTabIndex] = useState(0);

  const tabsItem = [
    {
      name: "Responded Client",
      component: RespondedClient,
      clients: allClients?.overdueClients.RespondedClients,
    },
    {
      name: "Un-Responded Client",
      component: UnrespondedClients,
      clients: allClients?.overdueClients.UnrespondedClients,
    },
  ];
  return (
    <SafeAreaView className="bg-white h-full px-4">
      <View className="flex-row justify-between py-1 px-4">
        {tabsItem.map((item, index) => {
          return (
            <TabsLabel
              themed={true}
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

export default Overdue;
