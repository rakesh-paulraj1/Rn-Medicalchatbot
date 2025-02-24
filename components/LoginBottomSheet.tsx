import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import '../global.css'
import { Ionicons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Link } from 'expo-router'


const LoginBottomSheet = () => {
  return (
    <View className='absolute bottom-0 w-full p-6 bg-black rounded-[3vw]'>
      <TouchableOpacity className='p-4 bg-white rounded-[3vw] flex flex-row mb-4  justify-center'>
        <Ionicons name='logo-google' size={24} color='black' className='mr-2' />
        <Text className='text-2xl text-black font-bold'>Signin With Google</Text>
      </TouchableOpacity>
      <TouchableOpacity className='p-4 bg-gray-700 rounded-[3vw] flex flex-row mb-4  justify-center'>
        <Ionicons name='logo-google' size={24} color='white' className='mr-2' />
        <Text className='text-2xl text-white font-bold'>Signin With Google</Text>
      </TouchableOpacity>
      <Link href={{pathname:"/login",params:{type:'register'}}} asChild>
      <TouchableOpacity  className='p-4 bg-gray-700 rounded-[3vw] flex flex-row mb-4   justify-center'>
        <Ionicons name='mail' size={24} color='white' className='mr-2' />
        <Text className='text-2xl text-white font-bold'>Sign up with email</Text>
      </TouchableOpacity>
      </Link>
      <Link href={{pathname:"/login",params:{type:'login'}}} asChild>
      <TouchableOpacity className='p-4 bg-gray-700 rounded-[3vw] flex flex-row   justify-center'>
        <Ionicons name='person-outline' size={24} color='white' className='mr-2' />
        <Text className='text-2xl text-white font-bold'>Login</Text>
      </TouchableOpacity>
      </Link>
    </View>
  )
}

export default LoginBottomSheet