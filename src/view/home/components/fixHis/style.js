import { StyleSheet } from 'react-native'
import color from '../../../../contains/color.js'


const styles = StyleSheet.create({
    fixHis: {
        flex: 1,
        marginHorizontal: 27,
    },
    title: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleText: {
        fontFamily: "Roboto",
        fontStyle: "italic",
        fontWeight: '100',
        fontSize: 20,
        lineHeight: 23,
    },
    titleText2: {
        fontFamily: "Roboto",
        fontSize: 16,
        lineHeight: 18,
        color: color.sliderOrderBtnText,
    },
    HisItems: {
        marginTop: 19,
        marginBottom: 40,
        borderWidth: 1,
        borderColor: color.sliderOrderBtnText,
        borderRadius: 30,
    }




});

export default styles