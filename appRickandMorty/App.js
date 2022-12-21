
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home/index';
import Result from './src/screens/Result/index';


const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false
}
  
function App() {
  return (
    <View style={styles.root}>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} options={screenOptions} />                      
            <Stack.Screen name="Result" component={Result} options={screenOptions} />                      
        </Stack.Navigator>       
    </View>
  );
}

export default () => {
    return (
        <NavigationContainer>
          <App />
        </NavigationContainer>
    );
};


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'green',
  },
});
