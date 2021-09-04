import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image, Dimensions,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../../redux/action/action';
const Login = ({ route, navigation }) => {
    const [state, setState] = useState({
        id: '',
        password: '',
    });
    const dispatch = useDispatch();
    const Sign = () => {
        if (state.id == '' || state.password == '') {
            Alert.alert(
                "Segwitz",
                "Please enter id and password",
                [
                    {
                        text: "Cancel",
                        style: "cancel"
                    },
                    { text: "Yes" }
                ]
            );
        } else {
            const userData = {
                id: state.id,
                password: state.password
            }
            dispatch(LoginUser(userData));
            navigation.navigate('Home')

        }

    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <ScrollView>
                <View style={{ alignItems: 'center', marginVertical: 150 }}>
                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="ID"
                            placeholderTextColor="#003f5c"
                            onChangeText={(ev) => setState({ ...state, id: ev })}
                        />
                    </View>

                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Password"
                            placeholderTextColor="#003f5c"
                            secureTextEntry={true}
                            onChangeText={(ev) => setState({ ...state, password: ev })}
                        />
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => Sign()} style={styles.button}>
                            <Text style={{ textAlign: 'center', padding: 12, color: '#FFF', fontSize: 17 }}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ margin: 12, fontSize: 17, color: '#cbcbcb' }}>Forgot your password?</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: { backgroundColor: '#e5634d', width: 300, height: 50, alignSelf: 'center', borderRadius: 5 },
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    inputView: {
        width: "90%",
        backgroundColor: "#f5f5f5",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "#003f5c"
    }
});

export default Login;
