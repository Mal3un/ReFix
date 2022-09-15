import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import styles from './style.js'

const jobList = () => {
    return (
        <View style={styles.jobList}>
            <Text style={styles.textJobList}>Lựa chọn lĩnh vực</Text>
            <View style={styles.jobListContent}>
                <View style={styles.jobListContentItem}>
                    <View style={styles.jobListContentItemIcon}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../../assets/house.png')}
                        />
                    </View>
                    <Text style={styles.jobListContentItemText}>Nhà, Văn phòng</Text>
                </View>
                <View style={styles.jobListContentItem}>
                    <View style={styles.jobListContentItemIcon}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../../assets/car.png')}
                        />
                    </View>
                    <Text style={styles.jobListContentItemText}>Phương tiện</Text>
                </View>
                <View style={styles.jobListContentItem}>
                    <View style={styles.jobListContentItemIcon}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../../assets/dien.png')}
                        />
                    </View>
                    <Text style={styles.jobListContentItemText}>Điện nước</Text>
                </View>
                <View style={styles.jobListContentItem}>
                    <View style={styles.jobListContentItemIcon}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../../assets/dientu.png')}
                        />
                    </View>
                    <Text style={styles.jobListContentItemText}>Đồ điện tử</Text>
                </View>
            </View>
        </View>
    )
}

export default jobList