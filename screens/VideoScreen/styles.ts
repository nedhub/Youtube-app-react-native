import { StyleSheet } from 'react-native';




const styles = StyleSheet.create({
    videoPlayer: {
        width: '100%',
        aspectRatio: 16/9,
    },
    videoInfoContainer: {
        marginHorizontal: 10,
        flex: 1,
    },
    title: {
        color: "white",
        fontSize: 18,
        fontWeight: "500",
        // marginBottom: 5,
        marginVertical: 10,
    },
    tags: {
        color: "#0094e3",
        fontSize: 18,
        fontWeight: "500",
        // marginBottom: 5,
    },
    subtitle: {
        color: 'grey',
        fontSize: 14,
        fontWeight: "500",


    },


    actionListContainer: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        height: 60,





    },

    actionListItem: {
        width: 70,
        height: 70,
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: 'red',
    },


    actionText: {
        color: 'white',

    },



    avatar: {

        width: 50,
        height: 50,
        borderRadius: 25,
    }




});




export default styles;