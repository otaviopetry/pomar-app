/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Image
} from 'react-native';

import logoPomar from './assets/logo-projeto-pomar.png';

const App = () => {
  return (
    <>
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            
            <Image source={logoPomar} style={styles.logoPomar} />

            <TextInput
                style={styles.loginInput}
                placeholder={'Seu código de acesso'}
            />            
            
            <Text style={styles.loginText}>Entrar</Text>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E6D67',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    logoPomar: {
        marginBottom: 16
    },
    welcomeText: {
        fontWeight: 'bold',
        color: '#fff'
    },
    loginInput: {
        backgroundColor: '#fff',
        padding: 8,
        marginBottom: 32,
        marginHorizontal: 4,
        borderRadius: 5,
        width: 300,
        textAlign: 'center'
    },
    loginButton: {
        width: 100,
        padding: 8,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 8
    },
    loginText: {
        textAlign: 'center',
        color: '#fff'
    },
    logoArvore: {
        position: 'absolute',
        bottom: 40,
        width: 130,
        height: 30
    }
});

export default App;
