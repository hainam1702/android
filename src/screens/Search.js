import React from "react";
import { useState } from "react";
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    FlatList,
    TextInput
} from "react-native";

import ProductItemHorizontal from "../components/ProductItemHorizontal";
import products from '../config/products'

export default function SearchScreen({ navigation }) {
    const [textSearch, settextSearch] = useState("");
    const categories = [
        "Red T-Shirt",
        "Black Skeleton T-Shirt",
    ];
    const renderResult = () => {
        const data = products.filter((value) =>
            value.name.toLocaleLowerCase().includes(textSearch.toLocaleLowerCase())
        );
        const renderItem = ({ item, index }) => (
            <ProductItemHorizontal item={item} navigation={navigation} />
        );
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 10 }}>
                    KẾT QUẢ
                </Text>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => item + index}
                    renderItem={renderItem}
                />
            </View>
        );
    };
    return (
        <View
            style={{
                backgroundColor: "#fff",
                flex: 1,
                paddingTop: 70,
                paddingHorizontal: 12,
            }}
        >
            <TextInput
                style={{
                    backgroundColor: "#f4f4f4",
                    paddingVertical: 15,
                    borderRadius: 20,
                    paddingHorizontal: 20,
                    marginBottom: 14,
                }}
                placeholder="Nhập để tìm kiếm..."
                value={textSearch}
                onChangeText={settextSearch}
            />
            {textSearch.trim().length > 0 ? (
                renderResult()
            ) : (
                <>
                    <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 10 }}>
                        GỢI Ý CHO BẠN
                    </Text>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        {categories.map((value, item) => (
                            <TouchableOpacity
                                onPress={() => {
                                    settextSearch(value);
                                }}
                                style={{
                                    backgroundColor: "#f4f4f4",
                                    paddingHorizontal: 12,
                                    paddingVertical: 8,
                                    marginRight: 12,
                                    marginBottom: 12,
                                    borderRadius: 100,
                                }}
                                key={item}
                            >
                                <Text>{value}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </>
            )}
        </View>
    );
}
