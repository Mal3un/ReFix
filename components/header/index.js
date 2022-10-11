import { Text, Image, View, Icon } from 'react-native'
import React from 'react'
import styles from './style'

const header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.avatar}>
                <Image source={require('../../assets/avatar.png')} style={styles.avatarImage} />
            </View>
            <View style={styles.infoUser}>
                <Text style={styles.textHello}>ReFix xin chào</Text>
                <Text style={styles.textName}>Lê Minh Đức</Text>
            </View>
            <View style={styles.headerNoti}>
                <Text >🔔</Text>
            </View>
        </View>
    )
}

export default header
