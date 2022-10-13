import React, { Component } from 'react'
import { StatusBar, Dimensions, Text, View, Button, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, ImageBackground } from 'react-native'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Welcome = ({ navigation }) => {
    return (
        <ImageBackground style={{ paddingBottom: 40, height: '100%', width: '100%', backgroundColor: 'white' }}>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ backgroundColor: 'white' }}>
                    <View style={{ paddingHorizontal: windowWidth * 0.2 }}>
                        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: '#5256E8' }}>Welcome to ReFix</Text>
                        <Image style={{ marginTop: 20, height: 250, width: 200 }} source={require('../../images/repairman.png')}>

                        </Image>
                    </View>
                    <View style={{ paddingHorizontal: windowWidth * 0.2, marginTop: 40, height: 0.1 * windowHeight, width: '100%' }}>
                        <Text style={{ color: '#19104E', fontSize: 24, fontWeight: '300', textAlign: 'center' }} >Book a Fixer ? Easy for Refix...</Text>
                        <Text style={{ marginTop: 20, height: '100%', fontSize: 16, fontWeight: '700', color: '#A9A9AA', textAlign: 'center' }} >The fasest app to booking or order Fixer, Repaier everytime and everytime</Text>
                    </View>
                    <View style={{ marginHorizontal: windowWidth * 0.2, marginTop: 120 }}>
                        <Button
                            onPress={() => {
                                navigation.replace('Login')
                            }}
                            color='#5256E8' title="Go Refix now !" />
                    </View>
                </View>

            </SafeAreaView>
        </ImageBackground >
    )
}
