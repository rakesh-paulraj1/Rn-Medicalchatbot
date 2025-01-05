import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';
const Tab = createMaterialTopTabNavigator();

export default function sgpa() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Sgpa" component={Sgpascreen} />
      <Tab.Screen name="Cgpa" component={Cgpascreen} />
    </Tab.Navigator>
  );
}

function Sgpascreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sgpa Calc</Text>
    </View>
  );
}
function Cgpascreen(){
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cgpa calc</Text>
    </View>
  );
}