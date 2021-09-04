import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Button = (props) => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity onPress={() => props.screen == 'signin' ? navigation.navigate('sign in') : ''} style={[styles.button, { backgroundColor: props.color }]}>
                <Text style={{ textAlign: 'center', padding: 12, color: '#FFF', fontSize: 17 }}>{props.name}</Text>
            </TouchableOpacity>
        </View>


    );
};


const styles = StyleSheet.create({
    button: { backgroundColor: '#3b5a9a', width: 300, height: 50, alignSelf: 'center', borderRadius: 5 }
});
export default Button;
