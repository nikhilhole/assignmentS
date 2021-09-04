import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput
} from 'react-native';
const Input = (props) => {
    const { value, getValue } = useState('')
    return (
        <View style={styles.inputView} >
            <TextInput
                style={styles.inputText}
                placeholder={props.placeholder}
                placeholderTextColor="#bbaeae"
                onChangeText={text => getValue(text)}
            />
        </View>


    );
};


const styles = StyleSheet.create({
    inputView: {
        width: "100%",
        backgroundColor: "#f5f5f5",
        borderRadius:5,
        height: 50,
       
        justifyContent: "center",
        
    },
    inputText: {
        height: 50,
        color: "#bbaeae",
        padding:10
    }
});
export default Input;
