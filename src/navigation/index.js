import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../screens/Login";
import Register from "../screens/Register";
import BottomTabNavigator from '../navigation/BottomTabNavigator'
import ProductInfo from "../screens/ProductInfo";
import CartScreen from "../screens/Cart";
import WishList from "../screens/WishList";

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="HomeTab" component={BottomTabNavigator} />
                <Stack.Screen name="ProductInfo" component={ProductInfo} />
                <Stack.Screen name="Cart" component={CartScreen} />
                <Stack.Screen name="WishList" component={WishList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppNavigation;
