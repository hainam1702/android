import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";

export default function Profile({ navigation }) {
    const [user, setuser] = useState(null);
    const getUserData = async () => {
        let curUser = await AsyncStorage.getItem("curUser");
        curUser = JSON.parse(curUser);
        setuser(curUser);
    };
    const logOut = async () => {
        await AsyncStorage.removeItem("curUser");
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
        });
    };
    useEffect(() => {
        getUserData(user);
    }, []);
    return (
        <View
            style={{
                backgroundColor: "#fff",
                flex: 1,
                width: "100%",
                paddingTop: 70,
                paddingHorizontal: 12,
            }}
        >
            <View style={{ flexDirection: 'column',}}>
                <Image
                    style={{
                        height: 100,
                        width: 100,
                        borderRadius: 100,
                        marginBottom: 20
                    }}
                    source={{ uri: "https://i.pravatar.cc/300" }}
                />
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: "bold",
                        marginBottom:10

                    }}
                >
                   Hello {user && user.name}
                </Text>
                <Text
                    style={{
                        marginTop:5,
                        fontSize: 15,
                        fontStyle: "italic",
                        marginBottom:40
                    }}
                >
                   User name: {user && user.email}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 30,
                        paddingBottom: 12,
                        borderBottomColor: "gray",
                        borderBottomWidth: 1,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            flex: 1,
                            textAlign: "center",
                        }}
                    >
                        {"Đã Mua"}
                    </Text>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            flex: 1,
                            textAlign: "center",
                        }}
                    >
                        {"Đang Giao"}
                    </Text>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            flex: 1,
                            textAlign: "center",
                        }}
                    >
                        {"Đã Giao"}
                    </Text>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            flex: 1,
                            textAlign: "center",
                        }}
                    >
                        {"Đã Hủy"}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                    }}
                >
                    <Text
                        style={{
                            color: "#FF6699",
                            fontSize: 25,
                            flex: 1,
                            textAlign: "center",
                        }}
                    >
                        {"00"}
                    </Text>
                    <Text
                        style={{
                            color: "#FF6699",
                            fontSize: 25,
                            flex: 1,
                            textAlign: "center",
                        }}
                    >
                        {"00"}
                    </Text>
                    <Text
                        style={{
                            color: "#FF6699",
                            fontSize: 25,
                            flex: 1,
                            textAlign: "center",
                        }}
                    >
                        {"00"}
                    </Text>
                    <Text
                        style={{
                            color: "#FF6699",
                            fontSize: 25,
                            flex: 1,
                            textAlign: "center",
                        }}
                    >
                        {"00"}
                    </Text>
                </View>
            </View>

            <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#FF6699', justifyContent: 'center', padding: 15, borderRadius: 20, marginTop: 180 }} onPress={logOut}>
                <Text style={{ color: '#fff', borderTop:20, }}>Đăng xuất</Text>
            </TouchableOpacity>
        </View>
    );
}
