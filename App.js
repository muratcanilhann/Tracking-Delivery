import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomePage from './Pages/WelcomePage';
export default function App() {
  return (
    <View style={styles.style}>
      <WelcomePage/>
    </View>
  );
}

const styles = StyleSheet.create({
  style:{
    flex:1,
   
  }

});
