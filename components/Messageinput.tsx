import { View,  TouchableOpacity, TextInput, Platform } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
export type Messageinputprops = {
    onShouldSend: (message: string) => void;
}

const AtouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

const Messageinput = ({ onShouldSend }: Messageinputprops) => {
    const [message, setMessage] = useState('')
    const { bottom } = useSafeAreaInsets()
    const expanded = useSharedValue(0);

    const expanditems = () => {
        expanded.value=withTiming(1, { duration: 400 });
    }
const onTextChange = (text: string) => {    
    collapseitems();
    setMessage(text);
    
}        
    const onSend = () => {
        if (message.trim().length > 0) {
            onShouldSend(message);
            setMessage('');
        }
    }

    const collapseitems = () => {
        expanded.value=withTiming(0, { duration: 400 });
    }
    const expandedButtonStyle=useAnimatedStyle(()=>{
        const opacityInterpolation=interpolate(expanded.value,[0,1],[1,0],Extrapolation.CLAMP)
        const widthInterpolation=interpolate(expanded.value,[0,1],[30,0],Extrapolation.CLAMP)
        return {
            opacity: opacityInterpolation,
            width: widthInterpolation
        }
    })
    const buttonStyle=useAnimatedStyle(()=>{
     
        const widthInterpolation=interpolate(expanded.value,[0,1],[0,100],Extrapolation.CLAMP)
        return {
            opacity: expanded.value,
            width: widthInterpolation
        }
    }
    )
    return (
        <BlurView 
            intensity={90}
            tint="extraLight"
            style={{
                position: 'absolute',
                paddingBottom: bottom,
                bottom: 0,
                left: 0,
                right: 0,
                paddingTop: 10,
               backgroundColor: Platform.OS === 'android' ? 'rgba(255,255,255,0.7)' : 'transparent'
            }}
            // className=' bg-gray-100'
        >
            <View className='flex-row items-center p-3 rounded-[3vw] '>
                <AtouchableOpacity 
                    onPress={expanditems} 
                    className='bg-gray-200 rounded-full '
                    style={[expandedButtonStyle]}
                >
                    <Ionicons name='add' size={30} color='black' />
                </AtouchableOpacity>

                <Animated.View  className="flex flex-row items-center"style={[buttonStyle]}>
                       <TouchableOpacity onPress ={()=>ImagePicker.launchCameraAsync({})}>
                        <Ionicons name='camera' size={24} color='black' className='mx-2' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress ={()=>ImagePicker.launchImageLibraryAsync({})}>
                        <Ionicons name='image-outline' size={24} color='black' className='mx-2' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress ={()=>DocumentPicker.getDocumentAsync({})}>
                        <Ionicons name='folder-outline' size={24} color='black' className='mx-2' />
                        </TouchableOpacity>
                    
                </Animated.View>

                <TextInput
                    autoFocus
                    multiline
                    placeholder="Message"
                    value={message}
                    onChangeText={onTextChange}
                    onFocus={collapseitems}
                    className="flex-1 pl-4 mx-4 border border-gray-300 rounded-[4vw] p-4 max-h-20"
                    placeholderTextColor="#999"
                />

                {message.length > 0 ? (
                    <TouchableOpacity onPress={onSend}>
                        <Ionicons name='arrow-up-circle' size={34} color='black' />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity>
                        <FontAwesome5 name='headphones' size={24} color='#6b7280' />
                    </TouchableOpacity>
                )}
            </View>
        </BlurView>
    )
}

export default Messageinput