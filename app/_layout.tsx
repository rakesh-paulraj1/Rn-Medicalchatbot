import { StatusBar } from 'react-native';
import React from 'react';
import "../global.css";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Text } from 'react-native';
export default function Layout() {
  return (<>
    <StatusBar barStyle="light-content" backgroundColor="#000" />

  <GestureHandlerRootView  >
  <Drawer
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#000', 
            },
            drawerLabelStyle: {
              color: '#fff', 
            },
            headerStyle: {
              backgroundColor: '#000', 
            },
            headerTintColor: '#fff', 
            headerShown: false,
          }}
        >
     <Drawer.Screen
            name="index"
            options={{
              drawerLabel: 'Landing Page',
              title: 'Landing page',
              headerTitleAlign: 'center',
              headerShown: true, 
               
            }}
          />
           <Drawer.Screen
            name="Chat"
            options={{
              drawerLabel: 'Open Chat',
              title: 'Medicine Chatbot',
              headerTitleAlign: 'center',
              headerShown: true, 
               
            }}
          />
         <Drawer.Screen
          name="(nobottombar)/account" 
          options={{
            drawerLabel: 'Account',
            title: 'Account Settings',
            headerShown: true,
            headerTitleAlign: 'center',
        
          }}
        />
      </Drawer>
        
    </GestureHandlerRootView>
   
  
      </>
  );
}