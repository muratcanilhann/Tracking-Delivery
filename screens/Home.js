import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import { Poppins_800ExtraBold_Italic, useFonts } from '@expo-google-fonts/poppins';
import ProfilePhoto from "../assets/SVG/profilePhoto.svg";
import { useNavigation } from '@react-navigation/native';
import ServiceCard from '../components/ServicesCard/ServiceCard.js';


import { NavMenuSvg, Motocycle, NextSvg, PostmanSvg, Postman2Svg } from "../assets/SVG/index.js";


export default function Home() {


const servicesData = [
  {
    title: "Courier",
    subtitle: "70K+ Courier",
    SvgComponent: PostmanSvg,
  },
  {
    title: "Shipping",
    subtitle: "Safe Delivery",
    SvgComponent: Postman2Svg,
  },
  {
    title: "Courier",
    subtitle: "70K+ Courier",
    SvgComponent: PostmanSvg,
  },

];
 


  SplashScreen.preventAutoHideAsync();
  
  const [loaded, error] = useFonts({
    Poppins_800ExtraBold_Italic,
  });

  const navigation = useNavigation();

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <NavMenuSvg width={30} height={30} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Shipfast</Text>

        <View style={styles.profileContainer}>
          <ProfilePhoto />
        </View>
      </View>

      <View style={styles.trackContainer}>
        <Text style={styles.greetingText}>Hello Muratcan,</Text>
        <Text style={styles.trackTitle}>Track your shipment</Text>
        <Text style={styles.trackPrompt}>Please enter your tracking number</Text>
        
        <TextInput
          secureTextEntry={true}
          placeholder="Enter track number"
          placeholderTextColor="#000"
          style={styles.trackInput}
        />

        <Motocycle />
      </View>

      <View style={styles.serviceHeader}>
        <Text style={styles.serviceText}>My service</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
          <NextSvg width={20} height={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.serviceCardContainer}>
     
    {servicesData.map((item,index) =>{
      return <ServiceCard key={index} serviceDetail={item}/>
    })}

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071333',
    width: '100%',
  },
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "#9187FA",
    padding: 30,
    justifyContent: "space-between",
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: "Poppins_800ExtraBold_Italic",
    color: '#FFFFFF',
    fontSize: 23,
  },
  profileContainer: {
    backgroundColor: "gray",
    width: 30,
    height: 30,
    borderRadius: 50,
    overflow: 'hidden',
  },
  trackContainer: {
    alignItems: "center",
    backgroundColor: "#9187FA",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    paddingBottom: 20,
  },
  greetingText: {
    color: "#C9C9C9",
  },
  trackTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  trackPrompt: {
    color: "#FFFFFF",
    marginTop: 20,
    marginBottom: 12,
  },
  trackInput: {
    backgroundColor: "#FFFFFF",
    color: "black",
    width: 300,
    height: 50,
    padding: 10,
    borderRadius: 10,
  },
  serviceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  serviceText: {
    color: '#FFFFFF',
    fontWeight: "bold",
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  viewAllText: {
    color: "#C8482C",
    fontWeight: 'bold',
  },
  serviceCardContainer: {
    paddingHorizontal: 10,
    flexDirection:"row",
    gap:10
  },
  serviceCard: {
    backgroundColor: '#162140',
    width: 120,
    height: 140,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  serviceCardTitle: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  serviceCardSubtitle: {
    color: "#FFFFFF",
  },
});
