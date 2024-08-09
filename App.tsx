import { View, Text, StatusBar } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import { Image, ImageProps } from "react-native";
import icons from "./src/lib/icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeHeader from "./src/components/headers/HomeHeader";
import { RootStackParamList } from "./src/navigation";
import ClientDueAmount from "./src/screens/Home/dueAmount/ClientDueAmount";
import { AgentProvider } from "./src/context/AgentContext";
import { ClientProvider } from "./src/context/ClientContext";
import PreviousPayments from "./src/screens/Home/dueAmount/PreviousPayments";
import {
  initialDueAmountClients,
  initialHistoryDueAmountClients,
  initialHistoryKycClients,
  initialHistoryPropertyClients,
  initialKycClients,
  initialOverdueClients,
  initialPropertyClients,
} from "./src/context/fakeData";
import UpdateToClient from "./src/screens/Home/dueAmount/UpdateToClient";
import PropertyInformation from "./src/screens/Home/propertyClient/PropertyInformation";
import VerifiedDocuments from "./src/screens/Home/kycVerification/VerifiedDocuments";
import Overdue from "./src/screens/Overdue";
import CustomHeader from "./src/components/headers/CustomHeader";
import RespondedClientDetailsScreen from "./src/screens/overdue/RespondedClientDetailsScreen";
import UnrespondedClientDetailsScreen from "./src/screens/overdue/UnrespondedClientDetailsScreen";
import History from "./src/screens/History";
import HistoryDueAmountClientDetail from "./src/screens/History/DueAmount/ClientDetail";
import HistoryPropertyClientDetail from "./src/screens/History/PropertyVerification/ClientDetail";
import HistoryKycClientDetail from "./src/screens/History/KycProcess/HistoryKycClientDetail";
import Profile from "./src/screens/Profile";
import Pending from "./src/screens/Pending";

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <SafeAreaProvider>
      <AgentProvider>
        <ClientProvider>
          <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="MainMenu"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Login" component={Login} />
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
          </NavigationContainer>
        </ClientProvider>
      </AgentProvider>
    </SafeAreaProvider>
  );
};

const TabIcon = ({
  fillIcon,
  outlineIcon,
  color,
  name,
  focused,
}: {
  fillIcon: ImageProps;
  outlineIcon: ImageProps;
  color: string;
  name: string;
  focused: Boolean;
}) => (
  <View className="items-center justify-center gap-1 ">
    <Image
      source={focused ? fillIcon : outlineIcon}
      resizeMode="contain"
      className="w-6 h-6"
      tintColor={color}
    />
    <Text
      className={`text-xs ${focused ? "font-psemibold" : "font-pregular"}`}
      style={{ color }}
    >
      {name}
    </Text>
  </View>
);

const TabsLayout = () => {
  const Tabs = createBottomTabNavigator();
  const tabItems = [
    {
      name: "Home",
      label: "Home",
      component: Home,
      fillIcon: icons.HomeFill,
      outlineIcon: icons.HomeOutline,
    },
    {
      name: "Overdue",
      label: "Over Dues",
      component: Overdue,
      fillIcon: icons.OverdueFill,
      outlineIcon: icons.OverdueOutline,
    },
    {
      name: "Pending",
      label: "Pending's",
      component: Pending,
      search: true,
      fillIcon: icons.PendingFill,
      outlineIcon: icons.PendingOutline,
    },
    {
      name: "History",
      label: "History",
      component: History,
      search: true,
      fillIcon: icons.HistoryFill,
      outlineIcon: icons.HistoryOutline,
    },
    {
      name: "Profile",
      label: "Profile",
      component: Profile,
      fillIcon: icons.UserFill,
      outlineIcon: icons.UserOutline,
    },
  ];
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#A90542",
        tabBarInactiveTintColor: "#AA054299",
        tabBarStyle: {
          backgroundColor: "#F5F5F5",
          height: 84,
        },
      }}
    >
      {tabItems.map((item) => {
        return (
          <Tabs.Screen
            name={item.name}
            key={item.name}
            component={item.component}
            options={{
              headerTitle: () =>
                item.name === "Home" ? (
                  <HomeHeader />
                ) : (
                  <CustomHeader name={item.label} search={item.search} />
                ),
              headerStatusBarHeight: 10,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  fillIcon={item.fillIcon}
                  outlineIcon={item.outlineIcon}
                  color={color}
                  name={item.label}
                  focused={focused}
                />
              ),
              unmountOnBlur: true,
            }}
          />
        );
      })}
    </Tabs.Navigator>
  );
};

export default App;
