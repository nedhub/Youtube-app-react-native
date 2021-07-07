import Entypo from '@expo/vector-icons/build/Entypo';
import React from 'react';
import { View, Text, Image, StyleSheet }  from 'react-native';


const VideoListItem = (props) => {
    const { video } = props;








    return (
        

            

            <View style={styles.videoCard}>

            { /* Thumbnail */ }

            <Image style={styles.thumbnail} source={{ uri: video.thumbnail}} />

            <View>
            <View style={styles.timeContainer}>

<Text style={styles.time}>15.23</Text>



</View>


            </View>



            


            { /* Title row */ }

            <View style={styles.titleRow}>
                {/*Avatar*/}

                <Image style={styles.avatar} source= {{uri: 'https://yt3.ggpht.com/ytc/AKedOLRjh4xKMmjg5kD2JTZkedPqGhAnpotxMuBrUWfV=s176-c-k-c0x00ffffff-no-rj'}} />

                {/*Middle container: Title, subtitle, etx*/}


                <View style={styles.middleContainer}>

                    <Text style={styles.title}>

                    Italy tops Spain on penalties to reach EURO 2020 final 

                    </Text>

                    <Text style={styles.subtitle}>TSN 257K 4 days ago</Text>



                </View>

                <Image style={styles.avatar} source={{uri: ''}}/>

                <Entypo name="dots-three-vertical" size={16} color="white"/>


                {/*Icon */}



            </View>



            </View>



            





        
    )
}



const styles = StyleSheet.create({
    thumbnail: {
        width: '100%',
        aspectRatio: 16/9,

    },

    timeContainer: {
        backgroundColor: '#00000099',
        height: 25,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        position: 'absolute',
        right: 5,
        bottom: 5,

    },

    time: {
        color: 'white',
        fontWeight: 'bold',
    },

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        // flex: 1,
    },
    titleRow: {
        flexDirection: 'row',
        padding: 10,
        // borderColor: 'red',
        borderWidth: 5,
    },

    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: "300",
        marginBottom: 5,
    },
    subtitle: {
        color: 'grey',
        fontSize: 18,
        fontWeight: "500",
    },
    middleContainer: {
        marginHorizontal: 10,
        flex: 1,
        // backgroundColor: 'red',

    }



});

export default VideoListItem;