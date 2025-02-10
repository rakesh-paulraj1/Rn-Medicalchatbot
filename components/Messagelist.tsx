import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import MessageItem from './MessageItem'
export default function MessageList(messages: any) {
  return (
    <ScrollView  showsVerticalScrollIndicator={false} className='bg-black flex-1'>
      <Text className='text-white'>MessageList
        {messages.map((message,index)=>{
            return <MessageItem message={message} key={index} userid={1} />
        })}
      </Text>
    </ScrollView>
  )

}