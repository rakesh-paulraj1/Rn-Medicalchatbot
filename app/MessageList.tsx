import { View, Text } from 'react-native'
import React from 'react'
interface MessageListProps {
    messages: any[];
  }
const MessageList: React.FC = ({ messages }) => {
  return (
    <View className='bg-black flex-1'>
      <Text className='text-white'>MessageList
        {messages}
      </Text>
    </View>
  )
}

export default MessageList