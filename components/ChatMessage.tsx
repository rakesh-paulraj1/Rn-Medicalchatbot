import { Message, Role } from '@/utils/Interface'
import { Ionicons } from '@expo/vector-icons'
import { View, Text,Image } from 'react-native'


const ChatMessage = ({content,role,imageurl,prompt}:Message) => {
  return (
    <View className='flex-row '>
        {role==Role.Assistant ?(
            <View className='mt-3 rounded-full  bg-black  '>
               <Image source={require('@/assets/images/logo-white.png')} className='w-10 h-10 rounded-full' />
             
                </View>
        ):(
<View className=' w-30 h-30 rounded-full  mt-3  bg-white-200 items-center justify-center '>
               
<Ionicons name="person-outline" size={33}  color="black" />
               
                </View>
        )}
      <Text className='mt-3 text-lg p-4 '>{content}</Text>
    </View>
  )
}

export default ChatMessage