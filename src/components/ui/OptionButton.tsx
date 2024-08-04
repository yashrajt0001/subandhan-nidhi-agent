import { View, Text, Image, ImageProps, TouchableOpacity } from 'react-native'
import React from 'react'
import icons from '../../lib/icons'
import { robotoMedium } from '../../lib/fonts'

interface OptionButtonProps {
    icon: ImageProps,
    name: string
}

const OptionButton = ({icon, name}: OptionButtonProps) => {
  return (
    <TouchableOpacity className='bg-blueLight w-[35%] p-2 min-h-[100px] justify-center text-center rounded-lg items-center gap-y-2' activeOpacity={0.7}>
        <Image source={icon} className='h-6 w-6' resizeMode='contain'/>
        <Text style={robotoMedium} className='text-black text-center'>{name}</Text>
    </TouchableOpacity>
  )
}

export default OptionButton