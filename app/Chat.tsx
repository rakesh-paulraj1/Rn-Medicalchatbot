import { View, Text, StatusBar, TouchableOpacity, } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MessageList from './MessageList'
import { TextInput } from 'react-native-gesture-handler';
import Feather from '@expo/vector-icons/Feather';
import CustomKeyboardview from '@/components/CustomKeyboardview';
const Chat = () => {
    const [messages, setMessages] = React.useState([]);
  return (
    <CustomKeyboardview inchat={true}>
    <View className='bg-black flex-1'>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
     <View className='flex-1 justify-between  bg-neutral-100 overflow-visible'>
        <MessageList messages={messages} />
     </View>
     <View  className='pt-2 '>
        <View style={{marginBottom:hp(1.7)}} className='flex-row mx-3 justify-between items-center mx-3 '>
<TextInput placeholder='Your Query' style={{fontSize:hp(2)}} className='flex-1 mr-2 bg-neutral-700  rounded-full '/>
<TouchableOpacity className='bg-gray-700 p-4 mr-[1px] rounded-full' >
<Feather name="send" size={hp(2.7)} color="white" colour />
</TouchableOpacity>

</View>
        

     </View>
    </View>
    </CustomKeyboardview>
  )
}

export default Chat