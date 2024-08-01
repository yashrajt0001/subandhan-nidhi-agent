import { View, Text } from 'react-native'
import React from 'react'
import { robotoMedium, robotoRegular } from '../../lib/fonts'

interface DueAmountClientDetailsProps {
  user: {
    customerId: string,
    name: string,
    phone: string,
    loan: 'type',
    totalAmount: number,
    paidAmount: number,
    dueAmount: number,
    dueDays: number,
    totalLateCharges: number
  }
}

const DueAmountClientDetails = ({user}: DueAmountClientDetailsProps) => {
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
        {user.customerId}
      </Text>
      <Text style={robotoMedium} className="text-black">
        {user.name}
      </Text>
      <Text style={robotoMedium} className="text-black">
        {user.phone}
      </Text>
      <Text style={robotoMedium} className="text-black">
        {user.loan}
      </Text>
      <Text style={robotoMedium} className="text-black">
        {user.totalAmount}
      </Text>
      <Text style={robotoMedium} className="text-black">
        {user.paidAmount}
      </Text>
      <Text style={robotoMedium} className="text-black">
        {user.dueAmount}
      </Text>
      <Text style={robotoMedium} className="text-black">
        {user.dueDays} days
      </Text>
      <Text style={robotoMedium} className="text-black">
        {user.totalLateCharges.toString()}
      </Text>
    </View>
  </View>
  )
}

export default DueAmountClientDetails