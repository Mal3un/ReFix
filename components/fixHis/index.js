import { Text, Image, View, Icon, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import HisItem from './fixHisItem/index.js';

const fixHis = () => {
    return (
        <View style={styles.fixHis}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Lịch sử sửa chữa</Text>
                <Text style={styles.titleText2}>Xem tất cả</Text>
            </View>
            <View style={styles.HisItems}>
                <HisItem />
                <HisItem />
                <HisItem />

            </View>
        </View>

    )
}

export default fixHis
