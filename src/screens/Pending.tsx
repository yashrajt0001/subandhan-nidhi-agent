import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ClientContext from "../context/ClientContext";
import PendingDueAmountTab from "../components/tabs/PendingTabs/PendingDueAmountTab";
import TabsLabel from "../components/TabsLabel";
import SwipeableTabs from "react-native-swipe-tabs";
import PropertyVerification from "../components/tabs/HomeTabs/PropertyVerification";
import KycProcess from "../components/tabs/HomeTabs/KycProcess";
import DueLoan from "../components/tabs/HomeTabs/DueLoan";
import DueScheme from "../components/tabs/HomeTabs/DueScheme";
import { robotoMedium, robotoRegular } from "../lib/fonts";

const Pending = () => {
  const allClients = useContext(ClientContext);
  const [selectedHomeTabIndex, setselectedHomeTabIndex] = useState(0);
  const tabsItem = [
    {
      name: "Pending Loan",
      component: DueLoan,
      clients: allClients?.dueLoanClients,
    },
    {
      name: "Pending Scheme",
      component: DueScheme,
      clients: allClients?.dueSchemeClients,
    },
    {
      name: "Property Verification",
      component: PropertyVerification,
      clients: allClients?.propertyClients,
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
          return <item.component key={index} clients={item.clients} />;
        })}
      </SwipeableTabs>
    </SafeAreaView>
  );
};

export default Pending;


// const Pending = () => {
//   const allClients = useContext(ClientContext);
//   const [selectedTabIndex, setselectedTabIndex] = useState(0);
//   console.log(allClients?.pendingKycClients);
//   const tabsItem = [
//     {
//       name: "Due Amount",
//       component: PendingDueAmountTab,
//       clients: allClients?.pendingDueAmountClients,
//     },
//     {
//       name: "Property Verification",
//       component: PropertyVerification,
//       clients: allClients?.pendingPropertyClients,
//     },
//     {
//       name: "KYC Process",
//       component: KycProcess,
//       clients: allClients?.pendingKycClients,
//     },
//   ];
//   return (
//     <SafeAreaView className="bg-white h-full px-4">
//       <View className="flex-row justify-between py-1">
//         {tabsItem.map((item, index) => {
//           return (
//             <TabsLabel
//               name={item.name}
//               index={index}
//               key={index}
//               selectedTabIndex={selectedTabIndex}
//               setter={setselectedTabIndex}
//             />
//           );
//         })}
//       </View>

//       <SwipeableTabs
//         onSwipe={(x) => setselectedTabIndex(x)}
//         selectedIndex={selectedTabIndex}
//       >
//         {tabsItem.map((item, index) => {
//           // @ts-ignore
//           return <item.component key={index} clients={item.clients} />;
//         })}
//       </SwipeableTabs>
//     </SafeAreaView>
//   );
// };

// export default Pending;
