import { View, Text,Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Drawer from 'expo-router/drawer'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { DrawerContentScrollView, DrawerItemList,DrawerItem } from '@react-navigation/drawer'
import { TextInput } from 'react-native-gesture-handler'
export const CustomDrawerContent = (props:any) => {
  const {bottom,top}=useSafeAreaInsets();
return (
  <View className='flex-1' style={{paddingBottom:bottom,paddingTop:top}}>
<View className="flex-row pl-3 pr-3 items-center bg-gray-200 rounded-full pl-3 pr-3 px-4 py-2">
  <Ionicons name="search-outline" size={20} color="black" className="mr-2" />
  <TextInput
    placeholder="Search"
    className="flex-1 text-black"
  />
</View>
    <DrawerContentScrollView {...props}>
<DrawerItemList {...props} />
    </DrawerContentScrollView>
    <View className='p-16 '  style={{paddingBottom:bottom}}>
<Text>
  <Link href="/(auth)/(modal)/settings"  asChild>
  <TouchableOpacity className='flex-row items-center'>
    </TouchableOpacity>
  </Link>
  Version 1
</Text>
    </View>
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
    },
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
     <Drawer.Screen name="explore"
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
      ),headerTitleAlign: 'center'
    }} />
   </Drawer>
  )
}

export default Layout
