import { View, Text, Image } from 'react-native'
import React from 'react'
import { robotoBold } from '../../../lib/fonts'
import icons from '../../../lib/icons'

const RespondedClients = () => {
  return (
    <View>
        <View>
        <Text style={robotoBold} className="text-black my-2 text-base">
            User Details
          </Text>
          <Image source={icons.Search} className='w-4 h-4' resizeMode='contain'/>
        </View>
    </View>
  )
}

export default RespondedClients