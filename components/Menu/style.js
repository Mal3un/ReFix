import { StyleSheet } from 'react-native'
import color from '../../contains/color'


const styles = StyleSheet.create({
    menu: {
        height: 80,
        backgroundColor: color.white,
        borderColor: '#ccc',
        borderTopWidth: 1,
    },
    menuItem: {
        marginHorizontal: 28,
        marginTop: 30,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Item: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    selected: {
        width: 100,
        height: 48,
        backgroundColor: '#F5F5F5',
        borderRadius: 24,
        borderWidth: 1,
        borderColor: color.sliderOrderBtnText,

    },
    itemIcon: {
        marginHorizontal: 10,
        width: 24,
        height: 24,
    },


});

export default styles