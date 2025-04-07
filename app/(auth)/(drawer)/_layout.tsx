import { View, Text,Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Drawer from 'expo-router/drawer'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
export const CustomDrawerContent = (props:any) => {
  const {bottom,top}=useSafeAreaInsets();
return (
  <View>
    <DrawerContentScrollView {...props}>
<DrawerItemList {...props} />
    </DrawerContentScrollView>
  </View>
)
}

const Layout = () => {
  return (
   <Drawer
   drawerContent={CustomDrawerContent}
   screenOptions={{
    headerStyle:{
      backgroundColor:'white'
    },drawerActiveBackgroundColor:'grey',
    drawerActiveTintColor:'black',}
   }
   >
    <Drawer.Screen name="(chat)/new"
    getId={()=> Math.random().toString()} 
    options={{ title: 'Home',drawerIcon:()=>(
      <View className=' rounded-full overflow-hidden  bg-black w-10 h-10 items-center justify-center'>
       
        <Image source={require('@/assets/images/logo-white.png')} className='w-6 h-6' />
      </View>),
      headerRight:()=>(
        <Link href="/(auth)/(drawer)/(chat)/new" push  asChild>
          <TouchableOpacity className=' rounded-full w-10 h-10 mr-5 items-center justify-center'>
            <Ionicons name="create-outline" size={24}  color="black" />
          </TouchableOpacity>
        </Link>
      )
    }} />
     <Drawer.Screen name="(chat)/explore"
    options={{ title: 'Explore GPTs',drawerIcon:()=>(
      <View className=' rounded-full overflow-hidden  bg-gray-300 w-10 h-10 items-center justify-center'>
       <Ionicons name="apps-outline" size={24} color="black" />
             </View>),
      headerRight:()=>(
        <Link href="/(auth)/(drawer)/(chat)/new" push  asChild>
          <TouchableOpacity className=' rounded-full w-10 h-10 mr-5 items-center justify-center'>
            <Ionicons name="create-outline" size={24}  color="black" />
          </TouchableOpacity>
        </Link>
      )
    }} />
   </Drawer>
  )
}

export default Layout
