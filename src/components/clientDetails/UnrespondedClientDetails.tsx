import { View, Text } from "react-native";
import React from "react";
import { robotoMedium, robotoRegular } from "../../lib/fonts";

interface UnrespondedClientDetailsProps {
  user: OverdueUnrespondedClient;
}

const UnrespondedClientDetails = ({ user }: UnrespondedClientDetailsProps) => {
  return (
    <View className="bg-blueLight mt-2 rounded-lg py-4 px-5 flex-row justify-between">
      <View className="gap-2">
        <Text style={robotoRegular} className="text-black">
          Customer ID :
        </Text>
        <Text style={robotoRegular} className="text-black">
          Name :
        </Text>
        <Text style={robotoRegular} className="text-black">
          Phone No :
        </Text>
        <Text style={robotoRegular} className="text-black">
          Address :
        </Text>
        <Text style={robotoRegular} className="text-black">
          Type of Loan :
        </Text>
        <Text style={robotoRegular} className="text-black">
          Total loan Amount :
        </Text>
        <Text style={robotoRegular} className="text-black">
          Due Amount :
        </Text>
        <Text style={robotoRegular} className="text-black">
          Due in days :
        </Text>
        <Text style={robotoRegular} className="text-black">
          Paid Amount :
        </Text>
        <View className="flex-row items-center">
          <Text style={robotoRegular} className="text-black ">
            Date of re-paying{" "}
          </Text>
          <Text
            style={robotoRegular}
            className="text-black text-[10px] mt-[2px]"
          >
            (For Late Payment):
          </Text>
          <Text style={robotoRegular} className="text-black ">
            {" "}
            :
          </Text>
        </View>
        <Text style={robotoRegular} className="text-black">
          Added Interest :
        </Text>
        <View className="flex-row items-center">
          <Text style={robotoRegular} className="text-black ">
            Total Amount{" "}
          </Text>
          <Text
            style={robotoRegular}
            className="text-black text-[10px] mt-[2px]"
          >
            (with interest)
          </Text>
          <Text style={robotoRegular} className="text-black ">
            {" "}
            :
          </Text>
        </View>
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
          {user.address}
        </Text>
        <Text style={robotoMedium} className="text-black">
          {user.loanType}
        </Text>
        <Text style={robotoMedium} className="text-black">
          {user.totalLoanAMount}
        </Text>
        <Text style={robotoMedium} className="text-black">
          {user.dueAmount}
        </Text>
        <Text style={robotoMedium} className="text-black">
          {user.dueDays} days
        </Text>
        <Text style={robotoMedium} className="text-black">
          {user.paidAmount}
        </Text>
        <Text style={robotoMedium} className="text-black">
          {user.rePayingDate.getDate().toString().padStart(2, "0") +
            "/" +
            (user.rePayingDate.getMonth() + 1).toString().padStart(2, "0") +
            "/" +
            user.rePayingDate.getFullYear().toString().slice(-2)}
        </Text>
        <Text style={robotoMedium} className="text-black">
          {user.addedInterest}%
        </Text>
        <Text style={robotoMedium} className="text-black">
          {user.totalAmount}
        </Text>
      </View>
    </View>
  );
};

export default UnrespondedClientDetails;
