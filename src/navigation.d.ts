import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, NavigatorScreenParams } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
    Login: undefined
    MainMenu: NavigatorScreenParams<TabParamList>
    ClientDueAmount: {
        user: {
            name: string
        }
    }
};

type TabParamList = {
    Home: undefined,
    Overdue: undefined,
    Pending: undefined,
    History: undefined,
    Profile: undefined;
};

type HomeScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList>,
  BottomTabNavigationProp<TabParamList, 'Home'>
>;