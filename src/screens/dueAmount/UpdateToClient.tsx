import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomHeader from "../../components/headers/CustomHeader";
import ClientDetails from "../../components/clientDetails/DueAmountClientDetails";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation";
import ToggleButton from "../../components/ui/ToggleButton";
import { robotoMedium, robotoRegular } from "../../lib/fonts";
import { Input } from "../../components/ui/Input";
import { TouchableOpacity } from "react-native";
import { CustomButton } from "../../components/ui/CustomButton";

type UpdateToClientProps = StackScreenProps<
  RootStackParamList,
  "UpdateToClient"
>;

const UpdateToClient = ({ navigation, route }: UpdateToClientProps) => {
  const [paidStatus, setPaidStatus] = useState<"paid" | "unpaid">("paid");
  const [paidAmount, setPaidAmount] = useState("");
  const [paymentMode, setPaymentMode] = useState<"cash" | "online">("cash");

  const { user } = route.params;
  return (
    <SafeAreaView className="bg-white h-full px-4">
      <CustomHeader name="Update to client" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ClientDetails user={user} />
        <View className="mt-10">
          <View className="gap-y-6 mb-2">
            <View className="flex-row w-full justify-between">
              <Text style={robotoRegular} className="text-black text-base">
                Paid Client
              </Text>
              <ToggleButton
                barHeight={30}
                switchWidth={22}
                switchHeight={22}
                value={paidStatus === "paid" ? true : false}
                onValueChange={() => {
                  setPaidStatus((prev) =>
                    prev === "paid" ? "unpaid" : "paid"
                  );
                }}
                disabled={false}
                backgroundActive={"#3EAEFF"}
                backgroundInactive={"#D2D2D2"}
                circleActiveColor={"white"}
                circleInActiveColor={"white"}
                renderActiveText={false}
                renderInActiveText={false}
                switchLeftPx={1.6}
                switchRightPx={1.6}
                switchWidthMultiplier={2.8}
              />
            </View>
            <View className="flex-row w-full justify-between">
              <Text style={robotoRegular} className="text-black text-base">
                Unpaid Client
              </Text>
              <ToggleButton
                barHeight={30}
                switchWidth={22}
                switchHeight={22}
                value={paidStatus === "unpaid" ? true : false}
                onValueChange={() => {
                  setPaidStatus((prev) =>
                    prev === "unpaid" ? "paid" : "unpaid"
                  );
                }}
                disabled={false}
                backgroundActive={"#3EAEFF"}
                backgroundInactive={"#D2D2D2"}
                circleActiveColor={"white"}
                circleInActiveColor={"white"}
                renderActiveText={false}
                renderInActiveText={false}
                switchLeftPx={1.6}
                switchRightPx={1.6}
                switchWidthMultiplier={2.8}
              />
            </View>
          </View>
          {paidStatus === "paid" && (
            <>
              <Input
                theme="outline"
                className="text-base p-2"
                value={paidAmount}
                onchangeText={setPaidAmount}
                placeholder="Enter Amount Paid"
              />
              <View className="mt-4 flex-row w-full justify-between">
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => setPaymentMode("cash")}
                  className="flex-row gap-x-2"
                >
                  <View className="rounded-full border border-black w-5 h-5 items-center justify-center">
                    {paymentMode === "cash" && (
                      <View className="rounded-full border border-black h-2 w-2" />
                    )}
                  </View>
                  <Text style={robotoRegular} className="text-black">
                    Through Cash
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => setPaymentMode("online")}
                  className="flex-row gap-x-2"
                >
                  <View className="rounded-full border border-black w-5 h-5 items-center justify-center">
                    {paymentMode === "online" && (
                      <View className="rounded-full border border-black h-2 w-2" />
                    )}
                  </View>
                  <Text style={robotoRegular} className="text-black">
                    Through Online
                  </Text>
                </TouchableOpacity>
              </View>
              {paymentMode === "online" && (
                <View className="mt-4">
                  <Input
                    theme="outline"
                    className="text-base p-2"
                    value={paidAmount}
                    onchangeText={setPaidAmount}
                    placeholder="Enter Transaction Id"
                  />
                </View>
              )}
              <View className="mt-6">
                <Text
                  style={robotoRegular}
                  className="text-xs text-[#333333] mb-2"
                >
                  Upload a file below **mb
                </Text>
                <CustomButton
                  theme={"outline"}
                  title="Upload the Document"
                  textColor={"red"}
                  textStyle={robotoMedium}
                />
              </View>
            </>
          )}
          <CustomButton
            activeOpacity={0.5}
            disabled={paidStatus === "paid" ? true : false}
            className={`${paidStatus === "paid" ? "bg-redSecondary" : "bg-redPrimary"} my-8`}
            theme={"default"}
            title="Submit to Admin"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdateToClient;
