import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Stack, Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (<>
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
    
      <Tabs.Screen
        name="index"
        options={{
          title: 'SGPA/CGPA',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerShown:false,
        }}
      />
         <Tabs.Screen
      name="profile"
      options={{
        title: 'Profile ',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="code" color={color} />,
      }}
    />
    </Tabs>
  
    </>
  );
}
