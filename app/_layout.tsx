import { ActivityIndicator, StatusBar, TouchableOpacity, View } from 'react-native';
import React from 'react';
import "../global.css";
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { ClerkProvider, ClerkLoaded, useAuth } from '@clerk/clerk-expo'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Text } from 'react-native';
import { Slot, SplashScreen, Stack, useRouter, useSegments } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

import { tokenCache } from '@clerk/clerk-expo/token-cache'



const Innerlayout=()=> {
  const router=useRouter( );
  const [loaded,error]=useFonts({
    SpaceMono:require('../assets/fonts/SpaceMono-Regular.ttf')
  })
  const {isLoaded,isSignedIn}=useAuth();
  const segments=useSegments();


  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (!isLoaded || !loaded) return;
  
    const inAuthGroup = segments[0] === '(auth)';
    
    if(isSignedIn && !inAuthGroup) {
      router.replace('/(auth)')
      console.log("User is signed in and not in auth group")}
      else if(!isSignedIn && inAuthGroup) {
router.replace('/')
      }
  }, [isSignedIn, isLoaded, loaded, segments]);
  useEffect(() => {
   
    // console.log("Auth loaded:", isLoaded);
    console.log("Auth Signed In:", isSignedIn);
  }, [loaded, isLoaded, isSignedIn]);
  if(!loaded || !isLoaded) {
    return (
      <View className='flex-1 items-center justify-center '>
      <ActivityIndicator size='large' color='black' />
      </View>
    )
  }

 
  return (<>
   
<Stack>
  <Stack.Screen name="index" options={{headerShown:false}}/>
  <Stack.Screen  name="login" options={{presentation:'modal',headerTitle:"", headerLeft:() =>{
      return (
    <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name="close-outline" size={31} />

      
    </TouchableOpacity>
      );
  }}}
  />
  <Stack.Screen name='(auth)' options={{headerShown:false}}/>
</Stack>

   
  
      </>
  );
}
SplashScreen.preventAutoHideAsync();

 export default function  Layout()  {
 
  
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

  if (!publishableKey) {
    throw new Error('Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env')
  }

return (
  <ClerkProvider 
    publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string}
    tokenCache={tokenCache} 
  >
    <GestureHandlerRootView className='flex-1'>
    <Innerlayout />
    </GestureHandlerRootView>
    
  
 
  </ClerkProvider>
);


}
