import { StatusBar, TouchableOpacity, View } from 'react-native';
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
import { tokenCache } from '@/utils/cache'



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
    if (!isLoaded) return;

    const inAuthGroup = segments[0] === '(auth)';
console.log(inAuthGroup +" in auth group")
console.log(isSignedIn +" is signed in")
    if (isSignedIn && !inAuthGroup) {
    console.log("pushing to index")
    } else if (!isSignedIn) {
      router.replace('/login');
    }
  }, [isSignedIn]);
  // useEffect(() => {
  //   console.log("Fonts loaded:", loaded);
  //   console.log("Auth loaded:", isLoaded);
  //   console.log("Auth Signed In:", isSignedIn);
  // }, [loaded, isLoaded, isSignedIn]);

if(!loaded || !isLoaded)  return <View><Text>Loading...</Text></View>
 
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
