import { StyleSheet } from 'react-native'
import color from '../../contains/color'


const styles = StyleSheet.create({
    background: {
        height: 264,
        justifyContent: "center",
        position: "relative"
    },

    text1: {
        width: 200,
        position: "absolute",
        fontFamily: "Roboto",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: 28,
        left: 24,
        color: color.white,
        top: 60,
    },
    text2: {
        marginTop: 30,
        width: 160,
        position: "absolute",
        fontFamily: "Roboto",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 16,
        left: 24,
        color: color.white,
        top: 100,

    },
    buttonOrder: {
        width: 120,
        position: "absolute",
        bottom: 40,
        left: 24,
        backgroundColor: color.sliderOrderBtnText,
        borderRadius: 20,
        color: color.white,
        borderRadius: 30,
    },


})

export default styles