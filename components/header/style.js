import { StyleSheet } from 'react-native'
import color from '../../contains/color'


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: 54,
        marginHorizontal: 28,
        alignItems: 'center',
        marginBottom: 5,
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 44,
        backgroundColor: color.backgroundAvatar,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: color.borderAvatar,
    },
    avatarImage: {
        width: 36,
        height: 36,

    },
    infoUser: {
        flexDirection: 'column',
        marginLeft: 10,
    },
    textHello: {
        fontSize: 12,
        fontFamily: 'Roboto',
        color: color.text2,
        fontWeight: 'normal',
        lineHeight: 14,
        textAlign: 'center',
    },
    textName: {
        marginTop: 5,
        fontSize: 16,
        color: color.text,
        fontFamily: 'Roboto',
        lineHeight: 19,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerNoti: {
        height: 44,
        width: 44,
        backgroundColor: color.white,
        borderWidth: 1,
        borderColor: color.border,
        borderRadius: 44,
        marginLeft: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    }



});

export default styles