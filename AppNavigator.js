import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import welcome from './app/screens/welcome';
import Intro from './app/screens/Intro';
import SignUp from './app/screens/SignUp';
import SignIn from './app/screens/SignIn';
import Home from './app/screens/Home';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name='Welcome' component={welcome} options={{ headerShown: false }} />
                <Stack.Screen name='Intro' component={Intro} options={{ headerShown: false }} />
                <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
                <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})