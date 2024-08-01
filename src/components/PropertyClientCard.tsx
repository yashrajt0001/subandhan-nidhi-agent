import {
    View,
    Text,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import icons from "../lib/icons";
  import { robotoRegular } from "../lib/fonts";
  import { useNavigation } from "@react-navigation/native";
  import {
    HomeScreenNavigationProp,
  } from "../navigation";
  
  interface PropertyClientCardProps {
    user: PropertyClient;
  }
  
  const PropertyClientCard = ({ user }: PropertyClientCardProps) => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        className="py-4 px-2 bg-blueLight items-center flex-row justify-between rounded-lg shadow-sm shadow-black"
        onPress={() => {
          navigation.navigate("PropertyInformation", { user });
        }}
      >
        <View className="gap-2">
          <Text style={robotoRegular} className="text-black">
            Customer ID :{user.customerId}
          </Text>
          <Text style={robotoRegular} className="text-black">
            Name : {user.name}
          </Text>
          <Text style={robotoRegular} className="text-black">
            Phone No : {user.phone}
          </Text>
          <Text style={robotoRegular} className="text-black">
            Property Type : {user.propertyType}
          </Text>
        </View>
        <View
          className="justify-between mr-4 py-2"
          style={{ alignSelf: "stretch" }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <Image source={icons.PhoneCall} className="w-6 h-6" resizeMode="contain" />
          </TouchableOpacity>
          <View className="h-[1px] rounded-lg bg-[#3C3C3C]" />
          <TouchableOpacity activeOpacity={0.5}>
            <Image source={icons.Location} className="w-6 h-6" resizeMode="contain"/>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  
  export default PropertyClientCard;
  