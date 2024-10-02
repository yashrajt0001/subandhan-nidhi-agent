import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import backIcon from '../assets/images/backIcon.png'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'

const Header = (props: any) => {

    const navigate = useNavigation();

    return (
        <View className='flex flex-row items-center bg-white justify-center relative' style={{ paddingVertical: responsiveHeight(2), width: responsiveWidth(100) }}>
            {props.goBack && (
                <TouchableOpacity className='absolute left-[10px]' onPress={() => navigate.goBack()}>
                    <Image source={backIcon} style={{ width: 40, height: 40 }} resizeMode='contain' />
                </TouchableOpacity>
            )}
            <Text className="text-xl" style={{color: "#3C3A36", fontFamily: "Roboto-Bold" }}>
                {props.title}
            </Text>
        </View>
    )
}

export default Header