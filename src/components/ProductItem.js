import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";


export default function ProductItem({ item, navigation }) {

    const addToWishlist = async () => {
        let wishListData = await AsyncStorage.getItem("wishListData");
        if (wishListData) {
            wishListData = JSON.parse(wishListData);
            wishListData.push(item);
            alert(
                'Item Added Successfully to wish list',
            );
        } else {
            wishListData = [];
            wishListData.push(item);
            alert(
                'Item Added Successfully to wish list');
        }
        AsyncStorage.setItem("wishListData", JSON.stringify(wishListData));
    }
    return (
        <TouchableOpacity style={{
            marginBottom: 20,
        }}
            onPress={() => navigation.navigate('ProductInfo', { item: item })}>
            <View style={{ position: 'relative' }}>
                <Image
                    style={{
                        width: '100%',
                        height: 300,
                        borderRadius: 5,
                        resizeMode: 'cover'
                    }}
                    source={item.image}
                />
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        left: 20,
                        bottom: 20
                    }}
                    onPress={addToWishlist}
                >
                    <Ionicons
                        name="heart"
                        size={30}
                        color='#fff'
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15 }}>
                <View style={{ width: '70%' }}>
                    <Text style={{ fontSize: 20 }}>{item.name}</Text>
                    <Image
                        style={{
                            width: 150,
                            resizeMode: 'contain'
                        }}
                        source={require('../../assets/Stars.png')}
                    />
                    <Text style={{ color: 'gray' }}>Lorem ipsum dolor sit amet, consecte adipiscing elit.</Text>
                </View>
                <Text style={{ fontSize: 20, color: 'red' }}>${item.price}</Text>
            </View>
        </TouchableOpacity>
    )
}