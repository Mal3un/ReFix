import { Text, View, Image } from 'react-native'
import styles from './style.js'

const HisItem = () => {
    return (
        <View style={styles.HisItem}>
            <View style={styles.HisItemDate}>
                <Text style={styles.HisItemDateText}>1 Tháng 9, 2022</Text>
            </View>
            <View style={styles.HisItemInfo}>
                <View style={styles.HisItemInfoIcon}>

                </View>
                <View style={styles.HisItemInfoBody}>
                    <Text style={styles.HisItemInfoContent}>Thông tin thợ</Text>
                    <Text style={styles.HisItemInfoMan}>
                        Vũ Trung Anh        |   (Đồ điện tử)
                        {/* <Text style={styles.HisItemInfoJobType}> (Đồ điện tử) </Text> */}
                    </Text>
                    <Text style={styles.HisItemInfoContent}>Giá cả</Text>
                    <Text style={styles.HisItemInfoPrice}>
                        300.000 vnđ
                        {/* <Text style={styles.HisItemInfoJobType}> (Đồ điện tử) </Text> */}
                    </Text>

                </View>
            </View>
        </View>
    )
}

export default HisItem