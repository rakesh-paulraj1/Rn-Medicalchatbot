import { StatusBar, TouchableOpacity } from 'react-native';
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

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
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
  if(!loaded || isLoaded){
    return<Slot/>
  }
  useEffect(()=>{
   if(!isLoaded)return;
    const inauthpage = segments[0]?.includes('(auth)');
    console.log(inauthpage)
    if(isSignedIn && !inauthpage){
      //get the user inside because he has alredy been loddegn in 
    router.replace('/')
      }else if (!isSignedIn && inauthpage){
    
        router.replace('/')
    
      }},[isSignedIn])

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
 
  const publishablekey= process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string

return (
  <ClerkProvider 
    publishableKey={publishablekey}
    tokenCache={tokenCache}
  >
    <GestureHandlerRootView className='flex-1'>
    <Innerlayout />
    </GestureHandlerRootView>
 
  </ClerkProvider>
);


}
