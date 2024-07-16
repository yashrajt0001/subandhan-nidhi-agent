import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { robotoMedium } from "../lib/fonts";

interface TabsLabelProps {
  name: string;
  index: number;
  setter: (index: number) => void;
  selectedTabIndex: number
}

const TabsLabel = ({
  name,
  index,
  setter,
  selectedTabIndex
}: TabsLabelProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => setter(index)}>
      <View className=" py-2" style={{ alignSelf: "flex-start" }}>
        <Text className="text-[#0A0A0A] px-0.5" style={robotoMedium}>
          {name}
        </Text>
       {index === selectedTabIndex && <View className="bg-bluePrimary h-[2px] rounded-lg" />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TabsLabel;
