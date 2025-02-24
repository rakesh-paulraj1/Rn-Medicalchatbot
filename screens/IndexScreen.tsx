import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IndexScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('login')} />
    </View>
  );
};

export default IndexScreen;
