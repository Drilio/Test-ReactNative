import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuizScreen from './app/QuizScreen';
import Welcome from "./app/Welcome";
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

const App = () => {
  
  const [fontsLoaded] = useFonts({
    'JockeyOne-Regular': require('./assets/fonts/JockeyOne-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // or any loading indicator
  }

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

export default App;