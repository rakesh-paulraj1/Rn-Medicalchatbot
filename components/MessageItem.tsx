import { View, Text } from 'react-native'
import React from 'react'

const MessageItem = (message:any,userid:Number,key:any) => {

    return (
        <View style={{ flexDirection: 'row', justifyContent: userid===1 ? 'flex-end' : 'flex-start', marginBottom: 3 }}>
          <View style={{ width: '80%' }}>
            <View
              style={{
                alignSelf: userid===1 ? 'flex-end' : 'flex-start',
                padding: 3,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: userid===1 ? '#4CAF50' : '#ccc',  // Conditional border color
                backgroundColor: userid===1 ? '#E0F7FA' : '#F1F1F1',  // Conditional background color
              }}
            >
              <Text style={{ fontSize: 16 }}>
                {message?.text}
              </Text>
            </View>
          </View>
        </View>
      );
}

export default MessageItem