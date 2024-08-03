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
import ClientDueAmount from "./src/screens/dueAmount/ClientDueAmount";
import UserProvider from "./src/context/UserContext";
import { ClientProvider } from "./src/context/ClientContext";
import PreviousPayments from "./src/screens/dueAmount/PreviousPayments";
import {
  initialDueAmountClients,
  initialKycClients,
  initialPropertyClients,
} from "./src/context/fakeData";
import UpdateToClient from "./src/screens/dueAmount/UpdateToClient";
import PropertyInformation from "./src/screens/propertyClient/PropertyInformation";
import VerifiedDocuments from "./src/screens/kycVerification/VerifiedDocuments";
import Overdue from "./src/screens/Overdue";
import CustomHeader from "./src/components/headers/CustomHeader";

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <SafeAreaProvider>
      <UserProvider>
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
            </Stack.Navigator>
          </NavigationContainer>
        </ClientProvider>
      </UserProvider>
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
      component: Home,
      fillIcon: icons.PendingFill,
      outlineIcon: icons.PendingOutline,
    },
    {
      name: "History",
      label: "History",
      component: Home,
      fillIcon: icons.HistoryFill,
      outlineIcon: icons.HistoryOutline,
    },
    {
      name: "Profile",
      label: "Profile",
      component: Home,
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
              headerTitle: () => item.name === 'Home' ? <HomeHeader /> : <CustomHeader name={item.label}/>,
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
            }}
          />
        );
      })}
    </Tabs.Navigator>
  );
};

export default App;
