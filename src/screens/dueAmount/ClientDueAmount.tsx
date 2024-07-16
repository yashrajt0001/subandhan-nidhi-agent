import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { CompositeScreenProps } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList, TabParamList } from '../../navigation';

type ClientDueAmountProps = StackScreenProps<RootStackParamList, 'ClientDueAmount'>

const ClientDueAmount = ({navigation, route}: ClientDueAmountProps) => {
    const {user} = route.params
  return (
    <View>
      
    </View>
  )
}

export default ClientDueAmount