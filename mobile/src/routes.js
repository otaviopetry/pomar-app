import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import FirstPage from './pages/FirstPage';
import Quiz from './pages/Quiz';
import QuizQuestion01 from './pages/Quiz/QuizQuestion01';
import QuizQuestion02 from './pages/Quiz/QuizQuestion02';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>                
                <AppStack.Screen name="FirstPage" component={FirstPage} />
                <AppStack.Screen name="Quiz" component={Quiz} />                                      
                <AppStack.Screen name="QuizQuestion1" component={QuizQuestion01} />                                      
                <AppStack.Screen name="QuizQuestion2" component={QuizQuestion02} />                                      
            </AppStack.Navigator>
            
        </NavigationContainer>
    );
}