import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
    ImageBackground
} from "react-native";
import { useFonts, JockeyOne_400Regular} from "@expo-google-fonts/jockey-one";
import AppLoading from "expo-app-loading";

const Welcome = ({ navigation }) => {
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));
  const [progress, setProgress] = useState(new Animated.Value(0));
  const startQuiz = () => {
    // Animated.timing(fadeAnim,{
    //     toValue: 1,
    //     duration: 1000,
    //     useNativeDriver: false
    // }).start();
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1900,
        useNativeDriver: false,
      }),
    ]).start();

    Animated.timing(progress, {
      toValue: 0 + 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };
  let [fontsLoaded] = useFonts({
    JockeyOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }else{
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/background-welcome.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}
      >
        <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Quiz");
          startQuiz();
        }}
        style={styles.btn}
      >
        <Image source={require('../assets/button-main.png')} style={styles.btnText}></Image>
      </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItem: "center",
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    height: 350,
    resizeMode: "contain",
  },
  img: {
    height: 'screenHeight',
    width: 'screenWidth',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection:"column-reverse",
    // width: "50%",
    alignItems: "center",
    marginBottom: 150,
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    color: "#ffffff",
    letterSpacing: 1.1,
  },
});

export default Welcome;
