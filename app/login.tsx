 import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'
 import React from 'react'
import { useLocalSearchParams } from 'expo-router'
 
 const Page = () => {
  
 const {type}=useLocalSearchParams<{type:string}>();

    return (
 <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
  <Text>Page</Text>
 </KeyboardAvoidingView>
     
     
   )
 }
 
 export default Page