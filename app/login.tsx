import { View, Text, KeyboardAvoidingView, Platform, ActivityIndicator,Alert } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Image, TextInput, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSignIn, useSignUp } from '@clerk/clerk-expo';

const Page = () => {
  const [emailAddress, setemailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { type } = useLocalSearchParams<{ type: string }>();
  const {signUp,isLoaded :signupisLoaded,setActive:signupsetActive}=useSignUp();
  const {signIn,isLoaded,setActive}=useSignIn();
  const onSigninPress= async ()=>{
   if(!isLoaded)return;
   setLoading(true);
   console.log("sign in pressed");
   try{
    const result=await signIn.create({identifier:emailAddress,password});
   console.log(result);

   setActive({
     session:result?.createdSessionId
   });

 }catch(e:any){
     console.log(e);
   Alert.alert('The Error is ⚠️'+e.errors[0].message);}

   finally{
     setLoading(false);
   }
  
  }
  const onSignupPress=async()=>{
    if(!isLoaded)return;
    setLoading(true);
 console.log("sign up pressed");
    try{
     const result=await signUp?.create({emailAddress,password});
    console.log(result);

    signupsetActive?({
      session:result?.createdSessionId
    }):null;

  }catch(e:any){
      console.log(e);
    Alert.alert('The Error is ⚠️'+e.errors[0].message);}

    finally{
      setLoading(false);
    }}

const bottom=useSafeAreaInsets();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={1}
      className='flex-1 p-20'
      style={{paddingBottom:bottom.bottom}}
    >
      {loading && (
        <View className='absolute inset-0 bg-black flex justify-center items-center'>
          <ActivityIndicator size='large' color='white' />
        </View>
      )}
      <View className='flex-1 items-center mt-10'>
        <Image source={require('../assets/images/logo-dark.png')} className='w-40 h-40' />
        <Text className='mt-6 text-3xl font-bold text-black'>
          {type === 'login' ? 'Login' : 'Register'}
        </Text>
       
        <TextInput
          autoCapitalize='none'
          placeholder='Email'
          onChangeText={setemailAddress}
          value={emailAddress}
          className='p-4 bg-gray-200 rounded-[3vw] mt-6 mb-4 w-full'
        />
        <TextInput
          autoCapitalize='none'
          placeholder='Password'
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          className='p-4 bg-gray-200 rounded-[3vw] mb-6 w-full'
        />
        <TouchableOpacity onPress={()=>{
          {type === 'login' ? onSigninPress(): onSignupPress()}
        }} className='bg-gray-900 p-4 rounded-[3vw] w-full items-center' >
          <Text className='text-2xl text-white font-bold'>
            {type === 'login' ? 'Login' : 'Register'}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Page

