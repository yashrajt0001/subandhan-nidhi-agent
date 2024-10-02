import React from "react";
import { TabsLayout } from "../../App";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "../navigation";
import ClientDueAmount from "../screens/Home/dueAmount/ClientDueAmount";
import PreviousPayments from "../screens/Home/dueAmount/PreviousPayments";
import UpdateToClient from "../screens/Home/dueAmount/UpdateToClient";
import PropertyInformation from "../screens/Home/propertyClient/PropertyInformation";
import VerifiedDocuments from "../screens/Home/kycVerification/VerifiedDocuments";
import RespondedClientDetailsScreen from "../screens/overdue/RespondedClientDetailsScreen";
import UnrespondedClientDetailsScreen from "../screens/overdue/UnrespondedClientDetailsScreen";
import HistoryDueAmountClientDetail from "../screens/History/DueAmount/ClientDetail";
import HistoryPropertyClientDetail from "../screens/History/PropertyVerification/ClientDetail";
import HistoryKycClientDetail from "../screens/History/KycProcess/HistoryKycClientDetail";
import { AgentProvider } from "../context/AgentContext";
import { ClientProvider } from "../context/ClientContext";
import Notification from "../screens/Notification";

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <AgentProvider>
      <ClientProvider>
        <Stack.Navigator
          initialRouteName="MainMenu"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="MainMenu" component={TabsLayout} />
          <Stack.Screen
            name="ClientDueAmount"
            component={ClientDueAmount}
          />
          <Stack.Screen
            name="PreviousPayments"
            component={PreviousPayments}
          />
          <Stack.Screen
            name="UpdateToClient"
            component={UpdateToClient}
          />
          <Stack.Screen
            name="PropertyInformation"
            component={PropertyInformation}
          />
          <Stack.Screen
            name="VerifiedDocuments"
            component={VerifiedDocuments}
          />
          <Stack.Screen
            name="RespondedClientDetailsScreen"
            component={RespondedClientDetailsScreen}
          />
          <Stack.Screen
            name="UnrespondedClientDetailsScreen"
            component={UnrespondedClientDetailsScreen}
          />
          <Stack.Screen
            name="HistoryDueAmountClientDetails"
            component={HistoryDueAmountClientDetail}
          />
          <Stack.Screen
            name="HistoryPropertyClientDetails"
            component={HistoryPropertyClientDetail}
          />
          <Stack.Screen
            name="HistoryKycClientDetails"
            component={HistoryKycClientDetail}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
          />
        </Stack.Navigator>
      </ClientProvider>
    </AgentProvider>
  );
};
