import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { robotoBold } from "../../../lib/fonts";
import icons from "../../../lib/icons";
import UnrespondedClientCard from "../../Cards/OverdueCard/UnrespondedClientCard";

interface UnrespondedClientsProps {
  clients: OverdueUnrespondedClient[];
}

const UnrespondedClients = ({
  clients: unrespondedClients,
}: UnrespondedClientsProps) => {
  const [searchMode, setSearchMode] = useState(false);
  return (
    <View className="mr-8">
      <View className="flex-row items-center justify-between pl-2 pr-4">
        <Text style={robotoBold} className="text-black my-2 text-base">
          User Details
        </Text>
        {searchMode ? (
          <TextInput
            className="text-[#3181e5] px-6 py-1 border text-xs border-[#D9E8FB] rounded-lg"
            placeholder="Enter Customer ID"
            placeholderTextColor={"#3181e5"}
          />
        ) : (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setSearchMode(true)}
            className="p-2"
          >
            <Image
              source={icons.SearchBlack}
              className="w-4 h-4"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
      {unrespondedClients ? (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={unrespondedClients}
          renderItem={({ item }) => <UnrespondedClientCard user={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 120,
            paddingTop: 10,
            gap: 10,
          }}
        />
      ) : (
        <View className="items-center justify-center m-10">
          <Text className="text-slate-400">No clients</Text>
        </View>
      )}
    </View>
  );
};

export default UnrespondedClients;
