import { View, Text, ScrollView, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react';

import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProductItem2 from '../components/ProductItem2';

const SPACING = 10;

export default function WishList({ navigation }) {
    const [wishList, setWishList] = useState([]);
    const [search, setSearch] = useState('');

    const getWishListData = async () => {
        let wishListData = await AsyncStorage.getItem("wishListData");
        if (wishListData) {
            wishListData = JSON.parse(wishListData);
        } else {
            wishListData = [];
        }
        setWishList(wishListData);
    };
    useEffect(() => {
        getWishListData();
        console.log(wishList)
    }, []);

    return (
        <ScrollView>
            <View style={{ flex: 1, paddingVertical: 70, paddingHorizontal: 30 }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#FFF',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 20,
                    marginBottom: 20
                }}>
                    <TextInput
                        style={{
                            flex: 1
                        }}
                        placeholder="Search My Wish List"
                        placeholderTextColor="#7C808D"
                        selectionColor="#3662AA"
                        onChangeText={setSearch}
                        value={search}
                    />
                    <Ionicons
                        name="search"
                        size={25}
                        color='#666'
                    />
                </View>
                <Text style={{ fontSize: 20, fontWeight: "700" }}>My Wish List</Text>
                <View
                    style={{
                        marginVertical: SPACING,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between'
                    }}
                >
                    {wishList.map((item, i) => (

                        <ProductItem2 item={item} key={i} navigation={navigation} />
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}