import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image, Dimensions,
    TouchableOpacity
} from 'react-native';
const windowHeight = Dimensions.get('window').height;
import Swiper from 'react-native-swiper';
import Button from '../shared/shared';
import LoginText from '../shared/Text';
const Login = () => {
    return (
        <SafeAreaView >
            <StatusBar />
            <ScrollView>
                <View style={styles.container}>
                    <Swiper style={styles.wrapper} dotColor='#dedede' activeDotColor='#e46248'>
                        <View style={styles.slide1}>
                            <Image source={{ uri: 'https://source.unsplash.com/1024x768/?nature' }}
                                style={{ width: 200, height: 200, borderRadius: 100 }} />
                            <Text style={{ fontSize: 20, padding: 20, color: '#373737' }}>Picking your travel destinations</Text>
                        </View>
                        <View style={styles.slide1}>
                            <Image source={{ uri: 'https://source.unsplash.com/1024x768/?nature' }}
                                style={{ width: 200, height: 200, borderRadius: 100 }} />
                            <Text style={{ fontSize: 20, padding: 20, color: '#373737' }}>Picking your travel destinations</Text>
                        </View>
                        <View style={styles.slide1}>
                            <Image source={{ uri: 'https://source.unsplash.com/1024x768/?nature' }}
                                style={{ width: 200, height: 200, borderRadius: 100 }} />
                            <Text style={{ fontSize: 20, padding: 20, color: '#373737' }}>Picking your travel destinations</Text>
                        </View>
                    </Swiper>
                </View>
                <View>
                    <Button name='Login with Facebook' color='#3b5a9a' screen='fb'/>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Button name='Sign in' color='#e5634d'  screen='signin'/>
                </View>
                <LoginText/>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        height: windowHeight - 350
    },
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30

    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default Login;
