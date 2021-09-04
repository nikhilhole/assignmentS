import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import login from '../component/login/login'
import signin from '../component/signin/signin';
import { Icon } from 'react-native-elements';
import Home from '../component/home/home';
import Booking from '../component/Booking/index';
import News from '../component/News/news';
import Account from '../component/Account/index';
import Message from '../component/Message/message';
import { lab } from "color";
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <LoginStack />
        </NavigationContainer>
    );
};
function BottomTabs() {
    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: '#ffffff' }}
            inactiveColor="red"
            tabBarLabel={false}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ tintColor }) => <Icon name="home" color="#9b9b9b"/>,
                    tabBarOptions: {
                        activeTintColor: '##9b9b9b',
                    },
                }} />
            <Tab.Screen
                name="Booking"
                component={Booking}
                options={{
                    tabBarLabel: 'Booking',
                    tabBarIcon: ({ tintColor }) => <Icon name="bookmark" color="#9b9b9b" />,
                    tabBarOptions: {
                        activeTintColor: '#00E8AC',
                    },
                }} />
            <Tab.Screen
                name="News"
                component={News}
                options={{
                    tabBarLabel: 'News',
                    tabBarIcon: ({ tintColor }) => <Icon name="news" type='entypo' color="#9b9b9b" />,
                    tabBarOptions: {
                        activeTintColor: '#00E8AC',
                    },
                }} />

            <Tab.Screen
                name="Message"
                component={Message}
                options={{
                    tabBarLabel: 'Message',
                    tabBarIcon: ({ tintColor }) => <Icon name="message" color="#9b9b9b" />,
                    tabBarOptions: {
                        activeTintColor: '#00E8AC',
                    },
                }} />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ tintColor }) => <Icon name="users" type='entypo' color="#9b9b9b"/>,
                    tabBarOptions: {
                        activeTintColor: '#00E8AC',
                    },
                }} />

        </Tab.Navigator>
    );
}
function SignInStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
            }}
        >
            <Stack.Screen options={{
                title: "Sign in",
                headerTitleStyle: { color: '#797979' },
                headerTintColor: '#dd6a58'
            }}
                name="signin" component={signin} />
        </Stack.Navigator>
    );
}
function LoginStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="login" component={login} />
            <Stack.Screen name="sign in" component={SignInStack} />
            <Stack.Screen name="Home" component={BottomTabs} />
        </Stack.Navigator>
    );
}
function NavigationStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="home" component={home} />
            <Stack.Screen name="myCoursesList" component={myCoursesList} />
            <Stack.Screen name="courseDetails" component={courseDetails} />
            <Stack.Screen name="myUnit" component={myUnit} />
            <Stack.Screen name="myLesson" component={myLesson} />
            <Stack.Screen name="assesement" component={assesement} />

            {/* <Stack.Screen name="journal" component={journal} /> */}
            <Stack.Screen name="myGradeList" component={myGradeList} />
            <Stack.Screen name="myGradeBook" component={myGradeBook} />
            <Stack.Screen name="webview" component={webview} />
            <Stack.Screen name="notifications" component={notificationList} />
            <Stack.Screen name="assesement1" component={assesement1} />
            <Stack.Screen name="assesement2" component={assesement2} />
            <Stack.Screen name="assesement3" component={assesement3} />
            <Stack.Screen name="assessment4" component={assessment4} />
            <Stack.Screen name="assesment5" component={assesment5} />
            <Stack.Screen name="assessment6" component={assessment6} />
            <Stack.Screen name="assessment7" component={assessment7} />
            <Stack.Screen name="htmlView" component={htmlView} />
            <Stack.Screen name="workcenter" component={workcenter} />
            <Stack.Screen name="result" component={result} />
            <Stack.Screen name="my_attendance" component={my_attendance} />
            <Stack.Screen name="annoucement" component={annoucement} />
            <Stack.Screen name="my_journal" component={my_journal} />
            <Stack.Screen name="my_journal1" component={my_journal1} />
            <Stack.Screen name="assignment" component={assignment} />
            <Stack.Screen name="changePassword" component={changePassword} />
        </Stack.Navigator>
    );
}
export default App;
