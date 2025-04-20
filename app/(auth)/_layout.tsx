import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
const Layout = () => {
  const router=useRouter();
  return (
   <Stack>
    <Stack.Screen name='(drawer)' options={{headerShown:false}}/>
    <Stack.Screen name='(modal)/settings' options={{
      headerTitle:"Settings",
      presentation:'modal',
      headerRight:()=>(<>
      {router.canGoBack() && (<TouchableOpacity onPress={()=>router.back()}>
          <Ionicons name="close-outline" size={31} color="black" />
        </TouchableOpacity>)}
        
        </>
      ),
      headerTitleAlign: 'center',
    }}/>
   </Stack>
  )
}

export default Layout