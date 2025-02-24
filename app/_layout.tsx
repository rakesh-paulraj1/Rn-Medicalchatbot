import { StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import "../global.css";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
export default function Layout() {
  const router=useRouter( );
  return (<>
   
<Stack>
  <Stack.Screen name="index" options={{headerShown:false}}/>
  <Stack.Screen  name="login" options={{presentation:'modal',headerTitle:" ", headerLeft:() =>{
      return (
    <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name="close-outline" size={34} />

      
    </TouchableOpacity>
      );
  }}}
  />
</Stack>

   
  
      </>
  );
}