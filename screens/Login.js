import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, Animated } from 'react-native';
import {FacebookSvg,GoogleSvg} from "../assets/SVG/index.js";

const { width } = Dimensions.get('window');

export default function Login() {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [translateY] = useState(new Animated.Value(0));

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
      Animated.timing(translateY, {
        toValue: -100, // Yukarı kaydırma miktarı
        duration: 200, // Animasyon süresi
        useNativeDriver: true,
      }).start();
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
      Animated.timing(translateY, {
        toValue: 0, // Aşağı inme
        duration: 200, // Animasyon süresi
        useNativeDriver: true,
      }).start();
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Access account</Text>

        <View style={styles.socialContainer}>
          <View style={styles.logoDiv}>
            <FacebookSvg />
          </View>
          <View style={styles.logoDiv}>
            <GoogleSvg />
          </View>
        </View>

        <Text style={styles.altLoginText}>or login with email</Text>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput 
            placeholder='example@gmail.com' 
            style={styles.input} 
            placeholderTextColor="#C9C9C9" 
          />

          <Text style={styles.label}>Password</Text>
          <TextInput 
            secureTextEntry={true} 
            style={styles.input} 
            placeholderTextColor="#C9C9C9" 
          />

          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>
              Don't have an account?{' '}
              <TouchableOpacity>
                <Text style={styles.registerLink}>Register</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071333', // Arka plan rengi
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width < 400 ? 20 : 40,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: '500',
  },
  subtitle: {
    color: "#C9C9C9",
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: "row",
    gap: 30,
    marginTop: 30,
  },
  logoDiv: {
    backgroundColor: "#0B1940",
    width: 120,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  altLoginText: {
    color: "#C9C9C9",
    marginTop: 30,
  },
  formContainer: {
    width: '100%',
    marginTop: 20,
    gap: 20,
    paddingHorizontal: 20, 
  },
  label: {
    color: "#C9C9C9",
  },
  input: {
    backgroundColor: "#162140",
    color: "white",
    width: '100%',
    height: 50,
    padding: 10,
    borderRadius: 10,
  },
  signInButton: {
    backgroundColor: "#5F77F5",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  signInText: {
    color: "#FFFFFF",
  },
  registerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  registerText: {
    color: "#C9C9C9",
  },
  registerLink: {
    color: "#5F77F5",
    fontWeight: "bold",
  },
});
