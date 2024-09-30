import React from "react";
import { TabsLayout } from "../../App";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "../navigation";
import ClientDueAmount from "../screens/Home/dueAmount/ClientDueAmount";
import {
  initialDueAmountClients,
  initialHistoryDueAmountClients,
  initialHistoryKycClients,
  initialHistoryPropertyClients,
  initialKycClients,
  initialOverdueClients,
  initialPropertyClients,
} from "../context/fakeData";
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
            //developmentonly
            initialParams={{ user: initialDueAmountClients[0] }}
          />
          <Stack.Screen
            name="PreviousPayments"
            component={PreviousPayments}
            // developmentonly
            initialParams={{ user: initialDueAmountClients[0] }}
          />
          <Stack.Screen
            name="UpdateToClient"
            component={UpdateToClient}
            // developmentonly
            initialParams={{ user: initialDueAmountClients[0] }}
          />
          <Stack.Screen
            name="PropertyInformation"
            component={PropertyInformation}
            // developmentonly
            initialParams={{ user: initialPropertyClients[0] }}
          />
          <Stack.Screen
            name="VerifiedDocuments"
            component={VerifiedDocuments}
            // developmentonly
            initialParams={{ user: initialKycClients.verifiedClients[0] }}
          />
          <Stack.Screen
            name="RespondedClientDetailsScreen"
            component={RespondedClientDetailsScreen}
            // developmentonly
            initialParams={{
              user: initialOverdueClients.RespondedClients[0],
            }}
          />
          <Stack.Screen
            name="UnrespondedClientDetailsScreen"
            component={UnrespondedClientDetailsScreen}
            // developmentonly
            initialParams={{
              user: initialOverdueClients.UnrespondedClients[0],
            }}
          />
          <Stack.Screen
            name="HistoryDueAmountClientDetails"
            component={HistoryDueAmountClientDetail}
            // developmentonly
            initialParams={{
              user: initialHistoryDueAmountClients[0],
            }}
          />
          <Stack.Screen
            name="HistoryPropertyClientDetails"
            component={HistoryPropertyClientDetail}
            // developmentonly
            initialParams={{
              user: initialHistoryPropertyClients[0],
            }}
          />
          <Stack.Screen
            name="HistoryKycClientDetails"
            component={HistoryKycClientDetail}
            // developmentonly
            initialParams={{
              user: initialHistoryKycClients[0],
            }}
          />
        </Stack.Navigator>
      </ClientProvider>
    </AgentProvider>
  );
};
