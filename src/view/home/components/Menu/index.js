import { Text, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const menu = ({ navigation }) => {
    return (
        <View style={styles.menu}>
            <View style={styles.menuItem}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                >
                    <View style={[styles.Item, styles.selected]}>
                        <Image
                            style={styles.itemIcon}
                            source={require('../../../../images/home.png')} />
                        <Text style={styles.itemText}>Home</Text>
                    </View>
                </TouchableOpacity>

                <View style={[styles.Item]}>
                    <Image style={styles.itemIcon} source={require('../../../../images/wallet.png')} />
                    {/* <Text style={styles.itemText}>Home</Text> */}
                </View>
                <View style={[styles.Item]}>
                    <Image style={styles.itemIcon} source={require('../../../../images/chat.png')} />
                    {/* <Text style={styles.itemText}>Home</Text> */}
                </View>
                <TouchableOpacity
                    onPress={() => navigation.replace('Profile')}
                >
                    <View style={[styles.Item]}>
                        <Image style={styles.itemIcon} source={require('../../../../images/account.png')} />
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default menu
