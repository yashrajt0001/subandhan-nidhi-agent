import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { robotoRegular } from "../../../lib/fonts";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../../../navigation";

interface KycVerifyClientCardProps {
  user: KycVerifyClient;
}

const KycVerifyClientCard = ({ user }: KycVerifyClientCardProps) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  console.log(user.zoomMeetTime)
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {}}
      className="flex-row w-full justify-between p-4 bg-blueLight items-center border border-gray-300 rounded-md"
    >
      <View>
        <Text style={robotoRegular} className="text-black">
          Name : {user.name}
        </Text>
        <Text style={robotoRegular} className="text-black">
          Age : {user.age}
        </Text>
        <Text style={robotoRegular} className="text-black">
          Phone no : {user.phone}
        </Text>
        <Text style={robotoRegular} className="text-black">
          E-mail : {user.email}
        </Text>
        <Text style={robotoRegular} className="text-black">
          Address : {user.address}
        </Text>
        {/* <Text style={robotoRegular} className="text-black">
          Zoom Meet Time : {user.zoomMeetTime.getHours()}:
          {user.zoomMeetTime.getMinutes()}
        </Text> */}
      </View>
      <Image
        source={{ uri: user.image }}
        resizeMode="contain"
        className="h-[70px] w-[70px] bg-gra rounded-full"
      />
    </TouchableOpacity>
  );
};

export default KycVerifyClientCard;
