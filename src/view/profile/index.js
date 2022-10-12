import React, { Component } from 'react'
import { StatusBar, Dimensions, Text, View, Button, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, ImageBackground } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Profile = () => {
    return (
        <View style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
            <SafeAreaView>
                <View style={{ flexDirection: 'column', alignItems: 'center', paddingHorizontal: windowWidth * 0.2, marginTop: windowHeight * 0.1 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'thin', fontSize: 20, marginBottom: 10 }}>Profile</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 100, height: 100, borderRadius: 50, borderWidth: 1, borderColor: '#ccc', backgroundColor: '#F26060' }}>
                        <Image style={{ height: 90, width: 90 }} source={require('../../images/UserFix.png')}>
                        </Image>
                    </View>
                    <Text style={{ marginTop: 20, fontSize: 22, color: '#19104E' }}>Lê Minh Đức</Text>
                </View>
            </SafeAreaView>
        </View >
    )
}
