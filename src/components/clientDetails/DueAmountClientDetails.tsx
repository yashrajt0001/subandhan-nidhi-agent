import { View, Text } from "react-native";
import React from "react";
import { robotoMedium, robotoRegular } from "../../lib/fonts";
import moment from "moment";

interface DueAmountClientDetailsProps {
  user: {
    Identifier: string;
    Type: string;
    Penalty: boolean;
    Completed: number;
    Emi: number;
    Installment: Date;
    Amount: number;
  };
}

const DueAmountClientDetails = ({ user }: DueAmountClientDetailsProps) => {
  const todayDate = moment()
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
          Loan:
        </Text>
        <Text style={robotoRegular} className="text-black">
          Total Amount:
        </Text>
        <Text style={robotoRegular} className="text-black">
          Amount Paid:
        </Text>
        <Text style={robotoRegular} className="text-black">
          Amount Due:
        </Text>
        <Text style={robotoRegular} className="text-black">
          Due in days:
        </Text>
        <Text style={robotoRegular} className="text-black">
          Total Late Charges:
        </Text>
      </View>
      <View className="gap-2">
        <Text style={robotoMedium} className="text-black">
          {user.Emi}
        </Text>
        <Text style={robotoMedium} className="text-black">
          name
        </Text>
        <Text style={robotoMedium} className="text-black">
          999
        </Text>
        <Text style={robotoMedium} className="text-black">
          {user.Type}
        </Text>
        <Text style={robotoMedium} className="text-black">
          {user.Amount}
        </Text>
        <Text style={robotoMedium} className="text-black">
          {user.Amount - user.Completed * user.Emi}
        </Text>
        <Text style={robotoMedium} className="text-black">
          {user.Emi * user.Completed}
        </Text>
        <Text style={robotoMedium} className="text-black">
        {todayDate.diff(moment(user.Installment), 'days')} days
        </Text>
        <Text style={robotoMedium} className="text-black">
          {user.Penalty ? 215 : 0}
        </Text>
      </View>
    </View>
  );
};

export default DueAmountClientDetails;
