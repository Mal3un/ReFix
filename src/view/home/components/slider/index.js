import { Text, ImageBackground, View, Button } from 'react-native'
import React from 'react'
import color from '../../../../contains/color'


import styles from './style'

const slider = () => {
    const imageUrl = require("../../../../images/slider.png")
    return (
        <ImageBackground source={imageUrl} resizeMode="cover" style={styles.background}>
            <Text style={styles.text1}>Tìm kiếm thợ một cách dễ dàng ?</Text>
            <Text style={styles.text2}>Đặt ngay để nhận mã giảm giá lên tới 50%.</Text>
            <View style={styles.buttonOrder}>
                <Button style={styles.buttonOrderText} color={color.sliderOrderBtnText} title="Đặt ngay" />
            </View>
        </ImageBackground>

    )
}

export default slider
