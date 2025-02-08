import React from 'react';
import { SafeAreaView, View, Text, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className="bg-black flex-1">
      {/* Centered text */}
      <View className="flex-1 justify-center items-center">
        <Text className="text-center text-white">HI</Text>
      </View>

     
        <TextInput
          className="text-center text-white bg-gray-800  p-4 rounded-xl w-4/4 h-32"
          placeholder="Type here"
        
        />
    
    </SafeAreaView>
  );
}
