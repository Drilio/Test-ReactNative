import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuizScreen from './app/QuizScreen';
import Welcome from "./app/Welcome";
import { useFonts, JockeyOne_400Regular } from '@expo-google-fonts/jockey-one';
import AppLoading from "expo-app-loading";

const Stack = createStackNavigator();

const App = () => {

    let [fontsLoaded] = useFonts({
        JockeyOne_400Regular,
    });

 if (!fontsLoaded) {
     return <AppLoading />;
 }else{
     return (
         <NavigationContainer>
             <Stack.Navigator initialRouteName="Welcome">
                 <Stack.Screen
                     name="Welcome"
                     component={Welcome}
                     options={{ headerShown: false }}
                 />
                 <Stack.Screen name="Quiz" component={QuizScreen} />
             </Stack.Navigator>
         </NavigationContainer>
     );

 }

}

export default App;