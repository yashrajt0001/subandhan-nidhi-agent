import { View, Text, StatusBar } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./src/screens/Home";
import { Image, ImageProps } from "react-native";
import icons from "./src/lib/icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeHeader from "./src/components/headers/HomeHeader";
import Overdue from "./src/screens/Overdue";
import CustomHeader from "./src/components/headers/CustomHeader";
import History from "./src/screens/History";
import Profile from "./src/screens/Profile";
import Pending from "./src/screens/Pending";
import { AuthProvider } from "./src/context/Auth";
import { Router } from "./src/routes/Router";
import AsyncStorage from "@react-native-async-storage/async-storage";

// AsyncStorage.clear()

const App = () => {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <Router />
      </AuthProvider>
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

export const TabsLayout = () => {
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
