import { View, Text, SafeAreaView, ScrollView, Dimensions, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'

const SPACING = 10;
const { width } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProductInfo({ route, navigation }) {
    const { item } = route.params;

    const addToCart = async () => {
        let cartData = await AsyncStorage.getItem("cartData");
        if (cartData) {
            cartData = JSON.parse(cartData);
            cartData.push({ ...item, amount: 1 });
            alert(
                'Item Added Successfully to cart',
                ToastAndroid.SHORT,
            );
        } else {
            cartData = [];
            cartData.push({ ...item, amount: 1 });
            alert(
                'Item Added Successfully to cart',
            );
        }
        AsyncStorage.setItem("cartData", JSON.stringify(cartData));
    };

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
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', position: 'relative' }}>
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <Image
                    style={{
                        width: '100%',
                        height: '70%',
                        height: 590,
                        paddingTop: SPACING * 4,
                    }}
                    resizeMode="cover"
                    source={item.image} />
                <View style={{
                    width: '100%',
                    padding: 20,
                    position: 'absolute',
                    top: SPACING * 4,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: 'center'
                }}>
                    <TouchableOpacity
                        style={{
                            height: SPACING * 4.5,
                            width: SPACING * 4.5,
                            backgroundColor: '#fff',
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: SPACING * 2.5,
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="arrow-back"
                            size={SPACING * 2.5}
                            color='#666'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            height: SPACING * 4.5,
                            width: SPACING * 4.5,
                            backgroundColor: '#fff',
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: SPACING * 2.5,
                        }}
                        onPress={() => navigation.navigate('Cart')}
                    >
                        <Ionicons name="cart" size={SPACING * 2.5} color='#666' />
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    width: '100%',
                    height: '45%',
                    bottom: 0,
                    backgroundColor: '#fff',
                    borderTopLeftRadius: SPACING * 2,
                    borderTopRightRadius: SPACING * 2,
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingVertical: 20
                }}>
                    <View style={{ width: 100, height: 3, backgroundColor: 'gray' }}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, alignItems: 'center', width: width, padding: SPACING * 2, marginBottom: 10 }}>
                        <View style={{ width: '65%' }}>
                            <Text style={{ fontSize: 22, color: '#000000', marginBottom: 10 }}>{item.name}</Text>
                            <Image
                                style={{
                                    width: 150,
                                    marginBottom: 20,
                                    resizeMode: 'contain'
                                }}
                                source={require('../../assets/Stars.png')}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <TouchableOpacity>
                                    <View style={{ width: 35, height: 35, borderRadius: 35, backgroundColor: "#000" }}></View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ width: 35, height: 35, borderRadius: 35, backgroundColor: "#A3A3A3" }}></View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ width: 35, height: 35, borderRadius: 35, borderWidth: 1, borderColor: 'gray' }}></View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ width: 35, height: 35, borderRadius: 35, backgroundColor: "#ECE3D2" }}></View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ width: 35, height: 35, borderRadius: 35, backgroundColor: "#F590AE" }}></View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={{ fontSize: 20, color: 'red' }}>${item.price}</Text>
                    </View>

                    <View style={{ flexDirection: "row", width: width, backgroundColor: '#D8D8D8', padding: 20, marginBottom: 25 }}>
                        <Text style={{ marginRight: 50, color: 'gray' }}>Available sizes: </Text>
                        {item.size.map((e, i) => (
                            <TouchableOpacity key={i}>
                                <Text style={{ marginRight: 30 }}>{e}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                        <TouchableOpacity
                            style={{
                                height: SPACING * 4.5,
                                width: SPACING * 4.5,
                                backgroundColor: '#D8D8D8',
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: SPACING * 2.5,
                                marginRight: 20
                            }}
                            onPress={addToWishlist}
                        >
                            <Ionicons
                                name="heart"
                                size={SPACING * 2.5}
                                color='#000'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                padding: SPACING,
                                backgroundColor: '#000',
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: SPACING * 4,
                                flex: 1
                            }}
                            onPress={addToCart}
                        >
                            <Text
                                style={{
                                    color: '#fff',
                                }}
                            >
                                Add to cart
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}