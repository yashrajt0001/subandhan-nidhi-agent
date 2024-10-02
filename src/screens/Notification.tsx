import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Header from "../components/Header";
import AgentContext from "../context/AgentContext";
import ClientContext from "../context/ClientContext";

const Notification = () => {
  const clients = useContext(ClientContext);
  const notifications = clients?.notifications;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header goBack={true} title={"Notifications"} />
      {notifications && notifications.length > 0 ? (
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            paddingHorizontal: responsiveWidth(4),
            paddingTop: responsiveHeight(3),
          }}
        >
          <ScrollView
            style={{ paddingBottom: responsiveHeight(12) }}
            showsVerticalScrollIndicator={false}
          >
            {/* <Text
                        style={{
                            color: 'black',
                            fontFamily: 'Roboto-Bold',
                            fontSize: responsiveFontSize(2),
                            marginBottom: responsiveHeight(1),
                        }}>
                        Today
                    </Text> */}
            {notifications.map((notification) => {
              // const dateStr = notification.Created;
              // const date = new Date(dateStr);

              // const day = String(date.getUTCDate()).padStart(2, '0');
              // const month = String(date.getUTCMonth() + 1).padStart(2, '0');

              // let hours = date.getUTCHours();
              // const minutes = String(date.getUTCMinutes()).padStart(2, '0');

              // const ampm = hours >= 12 ? 'PM' : 'AM';
              // hours = hours % 12 || 12;

              // const formattedTime = `${String(hours).padStart(
              //   2,
              //   '0',
              // )}:${minutes} ${ampm}`;

              // const formattedDate = `${day}/${month}, ${formattedTime}`;
              return (
                <TouchableOpacity
                  style={{
                    paddingVertical: responsiveHeight(2),
                    flexDirection: "row",
                  }}
                >
                  <View>
                    <Image
                      style={{
                        backgroundColor: "#949494",
                        width: responsiveHeight(7),
                        height: responsiveHeight(7),
                        borderRadius: 999,
                      }}
                    />
                  </View>
                  <View style={{ marginLeft: responsiveWidth(3) }}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        width: "92%",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Roboto-Medium",
                          fontSize: responsiveFontSize(2.1),
                          color: "black",
                          width: "60%",
                        }}
                      >
                        {notification.Title}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "Roboto-Regular",
                          fontSize: responsiveFontSize(1.7),
                          color: "gray",
                          marginTop: responsiveHeight(0.4),
                        }}
                      >
                        {/* {formattedDate} */}
                      </Text>
                    </View>
                    <View
                      style={{
                        marginTop: responsiveHeight(0.7),
                        width: "85%",
                      }}
                      className="text-gray-500"
                    >
                      <Text
                        style={{
                          fontSize: responsiveFontSize(1.7),
                          fontFamily: "Roboto-Regular",
                        }}
                      >
                        {notification.Description}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text className="text-black font-semibold">No Notifications.</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Notification;
