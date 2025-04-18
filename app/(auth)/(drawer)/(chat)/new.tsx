import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'
import { Stack } from 'expo-router'
const Page = () => {
  const {signOut } = useAuth()
  return (
    <View >
      <Stack.Screen options={{headerShown:false}}/>
      <Button title="Sign Out" onPress={() => {signOut()}}/>

      
    </View>
  )
}

export default Page

