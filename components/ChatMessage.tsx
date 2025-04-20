import { Message, Role } from '@/utils/Interface'
import { Ionicons } from '@expo/vector-icons'
import { View, Text,Image } from 'react-native'


const ChatMessage = ({content,role,imageurl,prompt}:Message) => {
  return (
    <View className='flex-row items-start'>
  <View className='flex-none'>
    {role === Role.Assistant ? (
      <View className='w-[40px] h-[40px] border-2 border-gray-400 rounded-full bg-black items-center justify-center'>
        <Image 
          source={require('@/assets/images/logo-white.png')} 
          className='w-[24px] h-[24px]'
          resizeMode='contain'
        />
      </View>
    ) : (
      <View className='w-[40px] h-[40px] rounded-full bg-gray-200 items-center justify-center'>
        <Ionicons name="person-outline" size={24} color="black" />
      </View>
    )}
  </View>

  
  <Text className='flex-1 mt-1 ml-3 text-xl '>
    {content}
  </Text>
</View>
  )
}

export default ChatMessage