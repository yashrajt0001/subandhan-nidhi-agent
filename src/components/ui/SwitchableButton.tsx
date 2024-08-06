import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

interface SwitchableButton
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity> {
  text: string;
  isActive: boolean;
  filled?: boolean;
  leftRounded?: boolean;
  rightRounded?: boolean;
  setter: () => void;
}

const SwitchableButton = ({
  text,
  isActive,
  leftRounded,
  rightRounded,
  filled,
  setter,
  ...props
}: SwitchableButton) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.5}
      onPress={setter}
      className={`p-2 ${filled ? (rightRounded && "rounded-r-lg") || (leftRounded && "rounded-l-lg") : "rounded-l-full rounded-r-full"} ${filled ? (isActive ? "bg-bluePrimary" : "bg-blueLight") : isActive ? "bg-blueLight" : "bg-[#f5f5f5]"}`}
    >
      <Text className={`text-center ${isActive ? "text-white" : "text-bluePrimary"}`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default SwitchableButton;
