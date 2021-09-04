import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
} from 'react-native';
const LoginText = (props) => {
    return (
        <View style={{ flexDirection: 'row' }}>
        <View style={{ marginHorizontal: 30,marginTop:14 }}>
            <Text style={{ textAlign: "center",fontSize:15 }}>Haven't registered yet?</Text>
        </View>
        <View style={{ marginHorizontal: 50,marginTop:14 }}>
            <Text style={{ textAlign: 'right',fontSize:15,color:'#db7b6b' }}>Join now</Text>
        </View>
    </View>


    );
};
export default LoginText;
