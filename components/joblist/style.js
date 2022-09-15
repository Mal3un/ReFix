import { StyleSheet } from 'react-native'
import color from '../../contains/color'

const styles = StyleSheet.create({
    jobList: {
        marginTop: 24,
        marginHorizontal: 27,
        height: 164,
    },
    textJobList: {
        fontFamily: "Roboto",
        fontStyle: "italic",
        fontWeight: '100',
        fontSize: 20,
        lineHeight: 23,
    },
    jobListContent: {
        marginTop: 20,
        flex: 1,
        flexDirection: "row",
    },
    jobListContentItem: {
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
    },
    jobListContentItemIcon: {
        width: 72,
        height: 72,
        backgroundColor: color.border,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    tinyLogo: {
        width: 40,
        height: 40,
    },
    jobListContentItemText: {
        marginTop: 10,
        textAlign: "center",
        height: 40,
        width: 60,
        fontSize: 14,
        lineHeight: 16,
        color: color.black,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: '100',
    }




})
export default styles