import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

interface SwitchableButton
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity> {
  text: string;
  isActive: boolean;
  setter: () => void;
}

const SwitchableButton = ({
  text,
  isActive,
  setter,
  ...props
}: SwitchableButton) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.5}
      onPress={setter}
      className={`p-2 rounded-l-full rounded-r-full ${isActive ? "bg-blueLight" : "bg-[#F5F5F5]"}`}
    >
      <Text className={`${isActive ? "text-bluePrimary" : "text-[#757575]"}`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default SwitchableButton;
