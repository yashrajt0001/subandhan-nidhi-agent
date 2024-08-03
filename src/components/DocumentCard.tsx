import { View, Text, Image } from 'react-native'
import React from 'react'
import icons from '../lib/icons'

interface DocumentCardProps {
    title: string
    image: string
}

const DocumentCard = ({title, image}: DocumentCardProps) => {
  return (
    <View className='gap-2 mb-4'>
      <View className='flex-row justify-between px-1'>
        <Text className='text-black'>{title}</Text>
        <Image source={icons.CheckGreen} resizeMode='contain' className='w-4 h-4'/>
      </View>
      <View className='h-[160px] bg-gray-200 rounded-lg'>
        <Image src={image} className=''/> 
      </View>
    </View>
  )
}

export default DocumentCard