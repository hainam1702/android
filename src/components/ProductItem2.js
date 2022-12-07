import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react';

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const SPACING = 10;

const ITEM_WIDTH = width / 2 - SPACING * 3;

export default function ProductItem2({ item, navigation }) {

    return (
        <>
            <TouchableOpacity style={{
                marginBottom: 20,
                width: ITEM_WIDTH - (SPACING * 2),
                backgroundColor: '#fff',
                borderRadius: 8
            }}
                onPress={() => navigation.navigate('ProductInfo', { item: item })}>
                <Image
                    style={{
                        width: '100%',
                        height: 120,
                        borderRadius: 8,
                        resizeMode: 'cover'
                    }}
                    source={item.image}
                />

                <View style={{ flexDirection: 'column', justifyContent: 'space-between', padding: 15 }}>
                    <Text>{item.name}</Text>

                    <Text style={{ fontSize: 20, color: 'red', marginTop: 10 }}>${item.price}</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}