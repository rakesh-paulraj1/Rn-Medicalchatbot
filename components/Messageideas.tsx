import { View, Text } from 'react-native'
import React from 'react'
const predefinedMessages=[
    {title:'Hello',text:'Hello, how can I help you?'},
    {title:'How are you?',text:'I am fine, thank you!'},
    {title:'What is your name?',text:'My name is ChatGPT!'},

]
type props={
    onSelectCard:(message:string)=>void;
}
const Messageideas = ({onSelectCard}:props) => {
  return (
    <View>
      <Text>Messageideas</Text>
    </View>
  )
}

export default Messageideas