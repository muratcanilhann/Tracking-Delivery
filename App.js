import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';

import { Poppins_800ExtraBold_Italic, useFonts } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import DrawerItem from '@react-navigation/drawer';


import { Onboarding, Login, Home, Tracking, Graphic } from "./screens";
import { Boxsvg, Chartsvg, Usersvg, Trucksvg, SearchSvg } from "./assets/SVG/drawer";


const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Poppins_800ExtraBold_Italic,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const drawerInformations = [
    {
      navigateTo: "Onboarding",
      label: "Onboarding",
      SvgComponent: Usersvg,
    },
    {
      navigateTo: "Login",
      label: "Login",
      SvgComponent: Usersvg,
    },
    {
      navigateTo: "Home",
      label: "Home",
      SvgComponent: Trucksvg,
    },
    {
      navigateTo: "Tracking",
      label: "Tracking",
      SvgComponent : Boxsvg,
    },
    {
      navigateTo: "Graphic",
      label: "Analytics",
      SvgComponent: Chartsvg,
    },
  
  ];
   



  return (
    <SafeAreaView style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>Shippfast</Text>

       
        <View style={styles.searchContainer}>
          <SearchSvg width={20} height={20} style={styles.searchIcon} />
          <TextInput
            placeholder="Search.."
            placeholderTextColor="#D3D3D3"
            style={styles.searchInput}
          />
        </View>
      </View>
      
    {drawerInformations.map((item, index) => {
  return (
    <TouchableOpacity
      key={index}
      style={styles.drawerItem}
      onPress={() => props.navigation.navigate(item.navigateTo)}
    >
      <item.SvgComponent width={24} height={24} style={styles.icon} />
      <Text style={styles.drawerItemText}>{item.label}</Text>
    </TouchableOpacity>
  );
})}

    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Onboarding"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Drawer.Screen name="Tracking" component={Tracking} options={{ headerShown: false }} />
        <Drawer.Screen name="Graphic" component={Graphic} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#071333',
  },
  drawerHeader: {
    height: 150,
    backgroundColor: '#071333',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'Poppins_800ExtraBold_Italic',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#162140',
    borderRadius: 10,
    width: '80%',
    height: 40,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 10,
  },
  drawerItemText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
