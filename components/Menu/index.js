import { Text, Image, View, } from 'react-native'
import React from 'react'
import styles from './style'

const menu = () => {
    return (
        <View style={styles.menu}>
            <View style={styles.menuItem}>
                <View style={[styles.Item, styles.selected]}>
                    <Image
                        style={styles.itemIcon}
                        source={require('../../assets/home.png')} />
                    <Text style={styles.itemText}>Home</Text>
                </View>
                <View style={[styles.Item]}>
                    <Image style={styles.itemIcon} source={require('../../assets/wallet.png')} />
                    {/* <Text style={styles.itemText}>Home</Text> */}
                </View>
                <View style={[styles.Item]}>
                    <Image style={styles.itemIcon} source={require('../../assets/chat.png')} />
                    {/* <Text style={styles.itemText}>Home</Text> */}
                </View>
                <View style={[styles.Item]}>
                    <Image style={styles.itemIcon} source={require('../../assets/account.png')} />
                    {/* <Text style={styles.itemText}>Home</Text> */}
                </View>

            </View>
        </View>
    )
}

export default menu
