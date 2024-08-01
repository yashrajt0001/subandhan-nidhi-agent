import { View, Text } from "react-native";
import React from "react";
import { robotoMedium, robotoRegular } from "../../lib/fonts";

interface PropertyClientDetailsProps {
  user: PropertyClient
}

const PropertyClientDetails = ({ user }: PropertyClientDetailsProps) => {
  return (
    <View className="bg-blueLight mt-2 rounded-lg py-4 px-5 flex-row justify-between">
      <View className="gap-2">
        <Text style={robotoRegular} className="text-black">
          Customer ID:
        </Text>
        <Text style={robotoRegular} className="text-black">
          Name:
        </Text>
        <Text style={robotoRegular} className="text-black">
          Phone No:
        </Text>
        <Text style={robotoRegular} className="text-black">
          Proprty Type:
        </Text>
        <Text style={robotoRegular} className="text-black">
          Proprty Address:
        </Text>
        <Text style={robotoRegular} className="text-black">
          Proprty Value:
        </Text>
      </View>
      <View className="gap-2">
        <Text style={robotoMedium} className="text-black">
          {user.customerId}
        </Text>
        <Text style={robotoMedium} className="text-black">
          {user.name}
        </Text>
        <Text style={robotoMedium} className="text-black">
          {user.phone}
        </Text>
        <Text style={robotoMedium} className="text-black">
          {user.propertyType}
        </Text>
        <Text style={robotoMedium} className="text-black">
          {user.propertyAddress}
        </Text>
        <Text style={robotoMedium} className="text-black">
          {user.propertyValue}
        </Text>
      </View>
    </View>
  );
};

export default PropertyClientDetails;
