import { StyleSheet } from 'react-native'
import color from '../../../contains/color'


const styles = StyleSheet.create({
    HisItem: {
        marginHorizontal: 24,
        marginTop: 24,
        marginBottom: 26,
    },
    HisItemDate: {
        width: 286,
        height: 51,
        backgroundColor: color.border,
        justifyContent: 'center',
        borderRadius: 30,
    },
    HisItemDateText: {
        marginHorizontal: 20,
        fontFamily: "Roboto",
        fontSize: 15,
        lineHeight: 16,
        fontWeight: 'bold',
        color: color.colorPurple,
    },
    HisItemInfo: {
        flexDirection: 'row',
        marginTop: 16,

    },
    HisItemInfoIcon: {
        marginTop: 10,
        width: 22,
        height: 22,
        backgroundColor: color.white,
        borderRadius: 22,
        borderWidth: 3,
        borderColor: color.borderHisInfo,
    },
    HisItemInfoBody: {
        marginLeft: 16,
    },
    HisItemInfoContent: {
        fontFamily: "Roboto",
        fontSize: 14,
        lineHeight: 16,
        fontWeight: 'bold',
        color: color.text2,
    },
    HisItemInfoMan: {
        marginVertical: 6,
        fontFamily: "Roboto",
        fontSize: 16,
        lineHeight: 19,
    },
    HisItemInfoPrice: {
        marginVertical: 6,
        fontFamily: "Roboto",
        fontSize: 16,
        lineHeight: 19,
    }







});

export default styles