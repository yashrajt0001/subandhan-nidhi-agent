import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../../components/headers/CustomHeader";
import Logo from "../../../assets/images/Logo.png";

const ClientDetail = () => {
  return (
    <SafeAreaView className="bg-white h-full px-4">
      <CustomHeader name="Client Due Amount" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="">
            <View className="bg-skyBlue h-[120px]"></View>
            <View className="absolute top-[50%] left-[50%] transform -translate-x-[60px]" style={{zIndex: 100}}>
                <Image source={Logo} className="w-[120px] h-[120px] rounded-full" resizeMode="contain"/>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ClientDetail;
