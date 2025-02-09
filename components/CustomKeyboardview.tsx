interface CustomKeyboardviewProps {
    children:  React.ReactNode;
    inchat: boolean;
  }
import { View, Text,KeyboardAvoidingView,ScrollView} from 'react-native'
import React from 'react'

const CustomKeyboardview = ({children,inchat}:CustomKeyboardviewProps) => {
  let scrollviewConfig={};
  if(inchat){
    scrollviewConfig={contentContainerStyle:{flexGrow:1}}
  }
    return (
   <KeyboardAvoidingView 
   behavior='height'
   keyboardVerticalOffset={inchat? 90:0}>
    <ScrollView 
    style={{flex:1}}
    bounces={false}
    showsVerticalScrollIndicator={false}
    {...scrollviewConfig}>
        {children}
    </ScrollView>
   </KeyboardAvoidingView>
  )
}

export default CustomKeyboardview