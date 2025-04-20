import { Button, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Storage } from '@/utils/Storage';
import { useMMKVString } from 'react-native-mmkv';
import { TextInput } from 'react-native-gesture-handler';
import { useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
const Settings = () => {
  const router = useRouter();
  const [key, setKey] = useMMKVString('apikey', Storage);
  const[apikey,setApikey]=useState('' as string)
  const [org,setorg]=useState('' as string)
  const [organization, setOrganization] = useMMKVString('org', Storage);
  const {signOut}=useAuth()
const saveapikey=()=>{
setKey(apikey)
setOrganization(org)
router.navigate('/(auth)/(drawer)/(chat)/new')
}
const removeapikey=()=>{
  setKey('')
  setOrganization('')
  
  }
  return (
    <View className="flex-1 bg-white p-4">
      {key && key !== "" && (
        <View className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <Text className="text-xl font-bold text-green-800 text-center">
            API Key Successfully Stored
          </Text>
          <TouchableOpacity className='p-4 bg-gray-200 rounded-[3vw] mt-6' onPress={removeapikey} >
        <Text className="text-gray-700 font-medium  text-center">
         Remove API key
          </Text>
      </TouchableOpacity>
          
        </View>
      )}

    
      <View className="flex-1">
        <Text className="text-2xl font-bold text-gray-800 mb-6 text-center">
          API Configuration
        </Text>
        
        <View className="space-y-4">
        
          <View>
            <Text className="text-gray-700 font-medium mb-1">API Key</Text>
            <TextInput
              autoCapitalize="none"
              placeholder="sk-...your-api-key"
              placeholderTextColor="#9CA3AF"
             onChangeText={setApikey}
              value={key}
              className="p-4 bg-gray-100 rounded-lg border border-gray-200 text-gray-800"
              secureTextEntry={true}
            />
          </View>

         
          <View>
            <Text className="text-gray-700 font-medium mb-1">Organization</Text>
            <TextInput
              autoCapitalize="none"
              placeholder="org-...your-org-id"
              placeholderTextColor="#9CA3AF"
              onChangeText={setorg}
              value={organization}
              className="p-4 bg-gray-100 rounded-lg border border-gray-200 text-gray-800"
            />
          </View>
        </View>
      <TouchableOpacity className='p-4 bg-gray-200 rounded-[3vw] mt-6' onPress={saveapikey} >
        <Text className="text-gray-700 font-medium  text-center">
          Save Changes 
          </Text>
      </TouchableOpacity>

        <Text className="text-gray-500 text-sm mt-6">
          Your credentials are securely stored locally on your device
        </Text>
        {/* <TouchableOpacity className='p-4 bg-gray-200  rounded-[3vw] mt-6' onPress={()=>signOut()} >
        <Text className="text-gray-700 font-medium  text-center">
        Signout
          </Text>
      </TouchableOpacity> */}
       <View className="flex-1" />
    
    <TouchableOpacity className='p-4 bg-gray-200 rounded-[3vw] mb-4' onPress={()=>signOut()}>
      <Text className="text-gray-700 font-medium text-center">
        Logout
      </Text>
    </TouchableOpacity>
  </View>
      
    </View>
  );
};

export default Settings;


