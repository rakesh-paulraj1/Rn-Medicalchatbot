import { Button, KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { useState } from 'react';
import { useAuth } from '@clerk/clerk-expo';
import { Image } from 'react-native';
import { Stack } from 'expo-router';
import Headerdropdown from '@/components/Headerdropdown';
import Messageinput from '@/components/Messageinput';
import Messageideas from '@/components/Messageideas';
import { Message } from '@/utils/Interface';
import { Role } from '@/utils/Interface';
import { FlatList } from 'react-native-gesture-handler';
import ChatMessage from '@/components/ChatMessage';
const Page = () => {
  const { signOut } = useAuth();
  const [gptversion, setGptversion] = useState('3.5');
const [messages, setMessages] = useState<Message[]>([]);
const DummyMessages: Message[] = [
  {
    content: 'Hello! How can I assist you today?',
    role: Role.Assistant,
  },
  {
    content: 'Can you tell me more about your services?',
    role: Role.User,
  },
  {
    content: 'Sure! I can help you with medical advice, scheduling, and more.Can you tell me more about your services?Can you tell me more about your services?Can you tell me more about your services?Can you tell me more about your services?Can you tell me more about your services? ',
    role: Role.Assistant,
  },
  {
    content: 'That sounds great. How do I get started?',
    role: Role.User,
  },
  {
    content: 'You can start by asking me any question or describing your needs.',
    role: Role.Assistant,
  },
];  
const getcompletions = async (message: string) => {
    console.log('getcompletions', message);
    setMessages(DummyMessages);
  };
  
  
  return (
    <View className="flex-1">
      <Stack.Screen
        options={{
          headerTitle: () => (
            <View className="flex-row items-center">
              <Headerdropdown
                title="Chatgpt"
                onSelect={(key) => {
                  setGptversion(key);
                }}
                selected={gptversion}
                items={[
                  { key: '3.5', title: 'GPT-3.5', icon: 'star_big_off' },
                  { key: '4.0', title: 'GPT-4.0', icon: 'star_on' },
                ]}
              />
            </View>
          ),
          headerTitleAlign: 'center',
        }}
      />

      <View className="flex-1 ">
   {messages.length===0 &&(
    <View className="justify-center items-center h-full">
    <View className="bg-black h-20 w-20  rounded-full justify-center items-center">
      <Image
        source={require('@/assets/images/logo-white.png')}
        className="h-10 w-10"
      />
    </View>
  </View>
   )}
   <FlatList contentContainerStyle={{paddingBottom:150,paddingTop:30}} data={messages}   renderItem={({item})=><ChatMessage{...item}
   />}
 />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={ 0}>
          {/* {messages.length===0 && <Messageideas onSelectCard={getcompletions}/>} */}
          
        <Messageinput onShouldSend={getcompletions} />
      </KeyboardAvoidingView>
    </View>
  );
};

export default Page;