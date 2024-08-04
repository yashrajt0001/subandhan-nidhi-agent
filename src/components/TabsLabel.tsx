import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { robotoMedium } from "../lib/fonts";

interface TabsLabelProps {
  name: string;
  themed?: boolean;
  index: number;
  setter: (index: number) => void;
  selectedTabIndex: number;
}

const TabsLabel = ({
  themed,
  name,
  index,
  setter,
  selectedTabIndex,
}: TabsLabelProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => setter(index)}>
      <View className={`py-2 ${themed && 'gap-y-2'}`} style={{ alignSelf: "flex-start" }}>
        <Text
          className={`text-[#0A0A0A] ${themed ? "px-4" : "px-0.5 mb-[2px]"} ${themed && index === selectedTabIndex && "text-bluePrimary"}`}
          style={robotoMedium}
        >
          {name}
        </Text>
        {index === selectedTabIndex && (
          <View className={`bg-bluePrimary h-[3px] rounded-lg`} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TabsLabel;
