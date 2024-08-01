import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { robotoMedium } from "../../lib/fonts";
import icons from "../../lib/icons";

interface CheckboxProps {
  text: string;
  isChecked: boolean;
  setter: (arg: boolean) => void;
}

const Checkbox = ({ text, isChecked, setter }: CheckboxProps) => {
  return (
    <View className="mb-6">
      <TouchableOpacity
        activeOpacity={0.5}
        className="flex-row justify-between w-full"
        onPress={() => setter(!isChecked)}
      >
        <Text style={robotoMedium} className="text-black">
          {text}
        </Text>
        <View
          className={`rounded-sm h-6 w-6 justify-center items-center border-2 border-black ${isChecked && "bg-bluePrimary p-2"}`}
        >
          {isChecked && (
            <Image
              source={icons.CheckRaw}
              resizeMode="contain"
              className="h-4 w-4 bg-bluePrimary"
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Checkbox;
