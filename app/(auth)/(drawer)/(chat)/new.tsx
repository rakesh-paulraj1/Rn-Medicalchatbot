import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'
import { Stack } from 'expo-router'
import Headerdropdown from '@/components/Headerdropdown'
const Page = () => {
  const {signOut } = useAuth()
  const [gptversion, setGptversion] = React.useState('3.5')
  return (
    <View >
      <Stack.Screen options={{headerTitle:() =>(
      <View className='flex-row items-center'>
      <Headerdropdown title='Chatgpt' onSelect={(key)=>{
         setGptversion(key)
        }}
        selected={gptversion} items={[
          {key:'3.5',title:'GPT-3.5',icon:'chatgpt'},
          {key:'4.0',title:'GPT-4.0',icon:'dalle'},
        ]}  />
        </View>
      ) ,headerTitleAlign: 'center'}} />
      <Button title="Sign Out" onPress={() => {signOut()}}/>

      
    </View>
  )
}

export default Page

