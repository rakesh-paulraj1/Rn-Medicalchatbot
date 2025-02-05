import { Stack } from 'expo-router/stack';
import React from 'react';
import "../global.css";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (<>
  <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
      <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'Medical chatbot',
          }}
        />
      </Drawer>
        
    </GestureHandlerRootView>
  
      </>
  );
}
 