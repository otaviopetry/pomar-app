import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import FirstPage from './pages/FirstPage';
import Quiz from './pages/Quiz';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>                
                <AppStack.Screen name="FirstPage" component={FirstPage} />
                <AppStack.Screen name="Quiz" component={Quiz} />                                      
            </AppStack.Navigator>
            
        </NavigationContainer>
    );
}