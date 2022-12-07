import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Search from '../screens/Search.js';
import WishList from '../screens/WishList';
import Location from '../screens/Location';

import { Feather } from '@expo/vector-icons'
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: 'white',
                    position: 'absolute',
                    bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // Max Height...
                    height: 90,
                    borderRadius: 10,
                    // Shadow...
                    shadowColor: '#000',
                    shadowOpacity: 0.06,
                    shadowOffset: {
                        width: 10,
                        height: 10
                    },
                }
            }}>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            <Feather
                                name="home"
                                size={25}
                                color={focused ? '#EF005B' : '#000'}
                            ></Feather>

                            <Text style={{
                                color: `${focused ? '#EF005B' : 'gray'}`,
                                marginTop: 5
                            }}>
                                Home
                            </Text>
                        </View>
                    )
                }} />

            < Tab.Screen
                name='Wishlist'
                component={WishList}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            <Feather
                                name="heart"
                                size={25}
                                color={focused ? '#EF005B' : '#000'}
                            ></Feather>
                            <Text style={{
                                color: `${focused ? '#EF005B' : 'gray'}`,
                                marginTop: 5

                            }}>
                                Wishlist
                            </Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name='Search'
                component={Search}
                options={{
                    tabBarIcon: () => (
                        <View style={{
                            width: 55,
                            height: 55,
                            backgroundColor: '#000',
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: Platform.OS == "android" ? 70 : 50

                        }}>
                            <Feather
                                name="search"
                                size={25}
                                color='white'
                            ></Feather>
                        </View>
                    )
                }} />
            < Tab.Screen
                name='Location'
                component={Location}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            <Feather
                                name="map-pin"
                                size={25}
                                color={focused ? '#EF005B' : '#000'}
                            ></Feather>
                            <Text style={{
                                color: `${focused ? '#EF005B' : 'gray'}`,
                                marginTop: 5
                            }}>
                                Location
                            </Text>
                        </View>
                    )
                }} />
            < Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            <Feather
                                name="user"
                                size={25}
                                color={focused ? '#EF005B' : '#000'}
                            ></Feather>
                            <Text style={{
                                color: `${focused ? '#EF005B' : 'gray'}`,
                                marginTop: 5
                            }}>
                                Profile
                            </Text>
                        </View>
                    )
                }} />

        </ Tab.Navigator >
    );
}

export default BottomTabNavigator;
