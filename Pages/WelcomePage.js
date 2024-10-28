import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View,SafeAreaView, Image, Touchable, TouchableOpacity } from 'react-native';

import { Poppins_800ExtraBold_Italic, useFonts } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';

import Group from "../assets/SVG/Group.svg"



export default function WelcomePage() {

    SplashScreen.preventAutoHideAsync();
    const [loaded, error] = useFonts({
      Poppins_800ExtraBold_Italic,
    });
  
    useEffect(() => {
      if (loaded || error) {
        SplashScreen.hideAsync();
      }
    }, [loaded, error]);
  
    if (!loaded && !error) {
      return null;
    }
  
    function cons(){
      console.log(("pressed"))
    }
    
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Shipfast</Text>
      
      <Group width={350} height={300} />
      
  
      <View style={{width:'80%', flex:1, justifyContent:"center",alignItems:"center" ,gap:25}}>
        <Text style={{fontSize:20 , color:'#5F77F5',fontWeight:'bold'}}>Welcome To shipfast!</Text>
        <Text style={{ 
    color: '#C1C1C1', 
    fontSize: 20, 
    fontWeight: '500', 
    textAlign: 'center', 
  }}>
    You can send items, track and be courier in this applications
  </Text>
  
  
      <TouchableOpacity style={styles.button} onPress={cons}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
  
  
      </View>
  
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#071333',
      alignItems: 'center',
      width:'100%',
      justifyContent:"space-between",
      gap:5
    },
    header:{
      color:'#5F77F5',
      fontFamily:"Poppins_800ExtraBold_Italic",
      fontSize:40,
      marginTop:"20%"
    },
    button:{
      height:50,
      width:'100%',
      backgroundColor:'#5F77F5',
      justifyContent:"center",
      borderRadius:30,
     
      
    },
    buttonText:{
      fontSize:17,
      color:'#C1C1C1', 
      textAlign:"center"
    }
   
  });
  