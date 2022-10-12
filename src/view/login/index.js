import React, { Component } from 'react'
import { StatusBar, Dimensions, Text, View, Button, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, ImageBackground } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Login = () => {
    return (
        <ImageBackground style={{ height: '100%', width: '100%', backgroundColor: '#266352' }}>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ height: '100%', width: '100%', }}>

                        {/* info */}
                        <View style={{ height: '15%', width: '100%', marginTop: 0.10 * windowHeight }}>
                            <Text style={{ paddingHorizontal: 40, fontSize: 24, color: 'white', fontWeight: '500', marginTop: 0.02 * windowHeight }}>Welcome to Refix  🔧</Text>
                            <Text style={{ paddingHorizontal: 40, fontSize: 18, color: 'white', fontWeight: '300', marginTop: 0.01 * windowHeight }}>Đăng nhập để tìm kiếm thợ sửa chữa ngay !</Text>
                        </View>
                        {/* email */}
                        <View style={{ marginTop: 0.05 * windowHeight }}>
                            <Text style={{ paddingHorizontal: 40, fontSize: 14, color: 'white', fontWeight: '600', marginVertical: 3, marginHorizontal: 10 }}>Tài khoản</Text>
                            <TextInput placeholder='Your phone or Email' style={{ paddingHorizontal: 20, paddingVertical: 10, color: 'black', marginBottom: 10, placeholderColor: 'white', backgroundColor: 'white', fontWeight: '400', fontSize: 16, marginHorizontal: 40, borderWidth: 2, borderRadius: 10, borderStyle: 'solid' }} name="username">
                            </TextInput>
                            <Text style={{ paddingHorizontal: 40, fontSize: 14, color: 'white', fontWeight: '600', marginVertical: 3, marginHorizontal: 10 }}>Mật khẩu</Text>
                            <TextInput secureTextEntry={true} placeholder='Your password' style={{ paddingHorizontal: 20, paddingVertical: 10, color: 'black', placeholderColor: 'white', backgroundColor: 'white', fontWeight: '400', fontSize: 16, marginHorizontal: 40, borderWidth: 2, borderRadius: 10, borderStyle: 'solid' }} name="password">
                            </TextInput>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 12, color: 'white', fontWeight: '400', marginTop: 10, color: 'Wheat', marginLeft: 0.65 * windowWidth }}>Quên mật khẩu ?</Text>
                            </TouchableOpacity>
                        </View>
                        {/* login */}
                        <View style={{ marginTop: 0.02 * windowHeight, paddingHorizontal: 40 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Button

                                    color="#0099cc"
                                    title="Đăng ký "
                                />
                                <Text style={{ paddingHorizontal: 20, fontSize: 16, color: 'white' }}>or</Text>
                                <Button

                                    color="#449d44"
                                    title="Đăng nhập"
                                />
                            </View>
                        </View>
                        {/* forgot */}
                        <View style={{ paddingBottom: 40, paddingHorizontal: 40, marginTop: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                            <Image
                                style={{ width: 70, height: 75, marginTop: 0.05 * windowHeight, marginHorizontal: 10 }}
                                source={require('../../images/logo.png')}
                            />
                            <Image
                                style={{ width: 75, height: 75, marginTop: 0.05 * windowHeight, marginHorizontal: 10 }}
                                source={require('../../images/fast.png')}
                            />
                            <Image
                                style={{ width: 80, height: 80, marginTop: 0.05 * windowHeight, marginHorizontal: 10 }}
                                source={require('../../images/logo2.png')}
                            />
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground >
    )
}
