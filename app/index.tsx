import Animatedintro from '@/components/Animatedintro';
import '../global.css'
import LoginBottomSheet from '@/components/LoginBottomSheet';
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import '../global.css'
export default function App() {
  return (
    <View style={{flex:1}}>
      <Animatedintro/>
     <LoginBottomSheet/>
    </View>
  );
}


