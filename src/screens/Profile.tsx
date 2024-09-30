import React, { useContext, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../assets/images/Logo.png";
import { robotoMedium, robotoRegular } from "../lib/fonts";
import AgentContext from "../context/AgentContext";
import SwitchableButton from "../components/ui/SwitchableButton";
import { CustomButton } from "../components/ui/CustomButton";

const Profile = () => {
  const agent = useContext(AgentContext);
  const [activeTab, setActiveTab] = useState<
    "verifications" | "recoveries" | "amounts"
  >("verifications");

  return (
    <SafeAreaView className="bg-white h-full px-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="">
          <View className="bg-skyBlue h-[120px] rounded-lg"></View>
          <View
            className="absolute top-[50%] left-[50%] transform -translate-x-[60px]"
            style={{ zIndex: 100 }}
          >
            <Image
              src={agent.profile}
              className="w-[120px] h-[120px] rounded-full"
              resizeMode="contain"
            />
          </View>
        </View>
        <View className="gap-y-2 bg-skyBlue px-4 py-2 rounded-lg mt-24 mb-4">
          <Text style={robotoRegular} className="text-black text-base">
            Agent ID :{agent.agentId}
          </Text>
          <Text style={robotoRegular} className="text-black text-base">
            Name : {agent.name}
          </Text>
          <Text style={robotoRegular} className="text-black text-base">
            E-mail : {agent.email}
          </Text>
          <Text style={robotoRegular} className="text-black text-base">
            Phone No : {agent.phone}
          </Text>
        </View>
        <Text className="text-base text-black p-2" style={robotoMedium}>
          Total Business Record
        </Text>
        <View className="flex-row py-1 flex-1">
          <SwitchableButton
            className="flex-1"
            filled={true}
            leftRounded={true}
            text="Verifications"
            isActive={activeTab === "verifications" ? true : false}
            setter={() => setActiveTab("verifications")}
          />
          <SwitchableButton
            className="flex-1 "
            filled={true}
            text="Recoveries"
            isActive={activeTab === "recoveries" ? true : false}
            setter={() => setActiveTab("recoveries")}
          />
          <SwitchableButton
            className="flex-1"
            filled={true}
            rightRounded={true}
            text="Amounts"
            isActive={activeTab === "amounts" ? true : false}
            setter={() => setActiveTab("amounts")}
          />
        </View>
        <View className="bg-blueLight mt-2 rounded-lg py-4 px-5 flex-row justify-between mb-14">
          <View className="gap-2">
            <View className="flex-row items-center">
              <Text style={robotoRegular} className="text-black text-base">
                Added{" "}
              </Text>
              <Text
                style={robotoRegular}
                className="text-black text-[12px] mt-[2px]"
              >
                (Recoveries)
              </Text>
              <Text style={robotoRegular} className="text-black ">
                {" "}
                :
              </Text>
            </View>
            <View className="flex-row items-center">
              <Text style={robotoRegular} className="text-black text-base">
                Completed{" "}
              </Text>
              <Text
                style={robotoRegular}
                className="text-black text-[12px] mt-[2px]"
              >
                (Recoveries)
              </Text>
              <Text style={robotoRegular} className="text-black ">
                {" "}
                :
              </Text>
            </View>
            <View className="flex-row items-center">
              <Text style={robotoRegular} className="text-black text-base">
                Pending{" "}
              </Text>
              <Text
                style={robotoRegular}
                className="text-black text-[12px] mt-[2px]"
              >
                (Recoveries)
              </Text>
              <Text style={robotoRegular} className="text-black ">
                {" "}
                :
              </Text>
            </View>
          </View>
          <View className="gap-2">
            <Text style={robotoMedium} className="text-black">
              30
            </Text>
            <Text style={robotoMedium} className="text-black">
              20
            </Text>
            <Text style={robotoMedium} className="text-black">
              10
            </Text>
          </View>
        </View>

        <CustomButton
          theme={"default"}
          title="Log Out"
          className="bg-[#014CA9] rounded-md mb-14"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
