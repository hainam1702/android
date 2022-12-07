import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import categories from '../config/data';
import ProductItem from '../components/ProductItem';

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const SPACING = 10;

export default function Home({ navigation }) {
    const [activeCategory, setActiveCategory] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const isFocused = useIsFocused();

    const getCartData = async () => {
        let cartData = await AsyncStorage.getItem('cartData');
        cartData = JSON.parse(cartData);
        setQuantity(cartData.length);
    }
    useEffect(() => {
        getCartData();
    }, [isFocused]);

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <ScrollView>
                <View style={{ paddingHorizontal: SPACING * 2, paddingVertical: SPACING * 2 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                        <Image
                            style={{
                                width: SPACING * 12,
                                resizeMode: 'contain',
                            }}
                            source={require('../../assets/Logo.png')}
                        />
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                            <View style={{ position: 'relative' }}>
                                <View style={{
                                    position: 'absolute',
                                    top: -5,
                                    right: 0,
                                    width: 15,
                                    height: 15,
                                    borderRadius: 15,
                                    backgroundColor: "red",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    zIndex: 2
                                }}>
                                    <Text style={{ color: '#fff' }}>{quantity && quantity}</Text>
                                </View>
                                <AntDesign
                                    name="shoppingcart"
                                    size={SPACING * 2.5}
                                    color='#000'
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        {categories.map((category, index) => (
                            <TouchableOpacity
                                style={[{
                                    marginRight: SPACING,
                                    borderBottomWidth: 3,
                                    borderColor: "#fff",
                                },
                                activeCategory === index && {
                                    borderColor: "#000",
                                }]}
                                key={index}
                                onPress={() => setActiveCategory(index)}
                            >
                                <Text
                                    style={[
                                        {
                                            paddingVertical: 10,
                                            paddingHorizontal: 20,
                                            fontSize: 14
                                        }
                                    ]}
                                >
                                    {category.title}
                                </Text>

                            </TouchableOpacity>

                        ))}
                    </View>

                    <View
                        style={{
                            marginVertical: SPACING,
                        }}
                    >
                        {categories[activeCategory].product.map((item, i) => (

                            <ProductItem item={item} key={item.id} navigation={navigation} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}