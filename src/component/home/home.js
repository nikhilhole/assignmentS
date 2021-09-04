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
    FlatList,
    BackHandler,
    Alert,
    ToastAndroid
} from 'react-native';
import { Card } from 'react-native-shadow-cards';
import InputComponent from '../shared/input';
const windowHeight = Dimensions.get('window').height;
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
const Home = () => {
    const getUserData = useSelector(state => state.userLogin);
    const navigation = useNavigation();
    useEffect(() => {
        if (getUserData.user == 'Invalid credential') {
            navigation.goBack()
            ToastAndroid.showWithGravityAndOffset(
                'Invalid credential please try again',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
            );
        }
        BackHandler.addEventListener("hardwareBackPress", backPressed);
    }, []);

    const backPressed = () => {
        if (navigation.isFocused()) {
            Alert.alert(
                "Segwitz",
                "Do you want to close app?",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "Yes", onPress: () => BackHandler.exitApp() }
                ]
            );
            return true;
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <StatusBar hidden={true} />
                <Image source={{ uri: 'https://source.unsplash.com/1024x768/?nature' }} style={styles.img} />
                <View style={styles.card}>
                    <Card style={{ padding: 10, margin: 10 }}>
                        <InputComponent placeholder='What are you looking for?' />
                        <FlatList
                            data={[
                                { num: 'Hotel' },
                                { num: 'Topur' },
                                { num: 'Car' },
                                { num: 'Flight' },
                                { num: 'Cruise' },
                                { num: 'Bus' },
                                { num: 'Event' },
                                { num: 'Show More' },
                            ]}
                            pagingEnabled={true}
                            horizontal={false}
                            numColumns={4}
                            renderItem={({ item }) =>
                                <View style={{ margin: 10 }}>
                                    <TouchableOpacity>
                                        <View style={{
                                            borderWidth: 0.5,
                                            borderColor: 'lightgray',
                                            borderRadius: 25,
                                            width: 50,
                                            height: 50,
                                            backgroundColor: '#f8f4f3',
                                            alignSelf: 'center'
                                        }}>
                                            <View style={{ marginTop: '2%' }}>
                                                <Image source={require('../../assets/images/cardImg.png')} style={{ width: 45, height: 45, tintColor: '#e7674e' }} />
                                            </View>
                                        </View>
                                        <Text style={{ color: '#bdbdbd' }}>
                                            {item.num}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            }
                        />
                    </Card>
                    <View style={{ alignSelf: 'flex-start', marginLeft: '3%' }}>
                        <Text style={{ textAlign: 'left', fontSize: 18, fontWeight: 'bold', marginLeft: '3%' }}>Promos Today</Text>
                        <FlatList
                            data={[
                                { num: 'Hotel' },
                                { num: 'Topur' },
                                { num: 'Car' },
                                { num: 'Flight' },
                                { num: 'Cruise' },
                                { num: 'Bus' },
                                { num: 'Event' },
                                { num: 'Show More' },
                            ]}
                            showsHorizontalScrollIndicator={true}
                            pagingEnabled={false}
                            horizontal

                            renderItem={({ item }) =>
                                <View style={{ padding: 10 }}>
                                    <Image source={{ uri: 'https://source.unsplash.com/1024x768/?water' }} style={{ width: 200, height: 250, borderRadius: 10 }} />
                                    <View style={{ position: 'absolute', top: '14%', left: '7%' }}>
                                        <Text style={{ color: '#FFF', fontSize: 18 }}>Attaction & Activities</Text>
                                        <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>Barcelona</Text>
                                        <TouchableOpacity style={[styles.button]}>
                                            <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 17, padding: 7 }}>Book Now</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            }
                        />

                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    img: { width: '100%', height: 200, resizeMode: 'cover' },
    card: { alignItems: 'center', top: -80 },
    button: { backgroundColor: '#e56447', width: 100, height: 40, alignSelf: 'center', borderRadius: 5, alignSelf: 'flex-start', marginTop: 5 }

});

export default Home;
