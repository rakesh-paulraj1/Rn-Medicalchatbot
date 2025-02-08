import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'react-native'
function account  () {
  return (
   <SafeAreaView className='bg-black flex-1'>
       <View className="flex-1 justify-center items-center ">
         <Text className='text-center'>HI</Text>
       </View>
       </SafeAreaView>
  )
}

export default account;
