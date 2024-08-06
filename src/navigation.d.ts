import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, NavigatorScreenParams } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
    Login: undefined
    MainMenu: NavigatorScreenParams<TabParamList>
    ClientDueAmount: {
        user: DueAmountClient
    }
    PreviousPayments: {
        user: DueAmountClient
    }
    UpdateToClient: {
        user: DueAmountClient
    }
    PropertyInformation: {
        user: PropertyClient
    }
    VerifiedDocuments: {
        user: KycVerifiedClient
    }
    RespondedClientDetailsScreen: {
        user: OverdueRespondedClient
    }
    UnrespondedClientDetailsScreen: {
        user: OverdueUnrespondedClient
    }
    HistoryDueAmountClientDetails: {
        user: HistoryDueAmountClient
    }
    HistoryPropertyClientDetails: {
        user: HistoryPropertyClient
    }
    HistoryKycClientDetails: {
        user: HistoryKycClient
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

type OverdueScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList>,
  BottomTabNavigationProp<TabParamList, 'Overdue'>
>;

type HistoryScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList>,
  BottomTabNavigationProp<TabParamList, 'History'>
>;