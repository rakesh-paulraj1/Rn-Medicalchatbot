import React from 'react';
import { View, KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';

interface CustomKeyboardviewProps {
  children: React.ReactNode;
  inchat: boolean;
}

const CustomKeyboardview = ({ children, inchat }: CustomKeyboardviewProps) => {
  let scrollviewConfig = {};
  if (inchat) {
    scrollviewConfig = { contentContainerStyle: { flexGrow: 1 } };
  }
  return (
    <KeyboardAvoidingView
      behavior="height"
      keyboardVerticalOffset={inchat ? 90 : 0}
      style={styles.container}
    >
      <ScrollView
        style={styles.scrollView}
        bounces={false}
        showsVerticalScrollIndicator={false}
        {...scrollviewConfig}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollView: {
    flex: 1,
  },
});

export default CustomKeyboardview;