import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/headers/CustomHeader";
import ClientDetails from "../../components/clientDetails/DueAmountClientDetails";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation";
import { robotoMedium } from "../../lib/fonts";
import icons from "../../lib/icons";

type PreviousPaymentsProps = StackScreenProps<
  RootStackParamList,
  "PreviousPayments"
>;

const PreviousPayments = ({ navigation, route }: PreviousPaymentsProps) => {
  const { user } = route.params;
  return (
    <SafeAreaView className="bg-white h-full px-4">
      <CustomHeader name="Previous Payments" />
      <ClientDetails user={user} />
      <View className="h-6" />
      {user.previousPayments ? (
        <FlatList
          data={user.previousPayments}
          contentContainerStyle={{ gap: 8, paddingBottom: 20 }}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              className="justify-between flex-row p-2 bg-blueLight w-full rounded-lg"
              key={index}
              onPress={() => navigation.navigate("UpdateToClient", { user })}
              activeOpacity={0.5}
            >
              <View className="gap-1">
                <View className="flex-row">
                  <Text className="text-black text-base">Amount: </Text>
                  <Text style={robotoMedium} className="text-black text-base">
                    {item.amount}
                  </Text>
                </View>
                <View className="flex-row items-center">
                  <View className="mr-2">
                    <Text className="text-[#0C0C0C] text-xs">{item.date}</Text>
                  </View>
                  <View className=" flex-row items-center">
                    <Text className="text-[#0C0C0C] text-xs items-center">
                      Due in days:{" "}
                    </Text>
                    <Text className="text-[#0C0C0C] text-xs items-center">
                      {item.dueDays}
                    </Text>
                  </View>
                </View>
              </View>
              <View className="flex-row gap-2 items-center">
                <Text
                  style={robotoMedium}
                  className={`${item.status === "Paid" ? "text-[#0C0C0C]" : "text-redPrimary px-3"}`}
                >
                  {item.status}
                </Text>
                {item.status === "Paid" && (
                  <Image source={icons.CheckCircle} className="w-6 h-6" />
                )}
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View className="text-slate-400 justify-center items-center">
          <Text>No Payments!</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default PreviousPayments;
