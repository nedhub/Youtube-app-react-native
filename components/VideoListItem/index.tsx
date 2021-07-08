import Entypo from '@expo/vector-icons/build/Entypo';
import React from 'react';
import { View, Text, Image, StyleSheet }  from 'react-native';


type VideoListItemProps = {

    video: {
        id: string,
        createdAt: string,
        title: string,
        thumbnail: string,
        videoUrl: string,
        duration: number,
        views: number,
        user: {
            name: string,
            image?: string,

        }
    }
}

const VideoListItem = (props: VideoListItemProps) => {
    const { video } = props;



    const minutes =  Math.floor(video.duration / 60);
    const seconds = video.duration % 60 // change time to 60 seconds format



    let viewsString = video.views.toString();



    if (video.views > 1_000_000) {
        viewsString = (video.views / 1_000_000).toFixed(2) + 'm'



    } else if (video.views > 1_000) {

        viewsString = (video.views / 1_000).toFixed(2) + 'k'
    }



    return (
        

            

            <View style={styles.videoCard}>

            { /* Thumbnail */ }

            <Image style={styles.thumbnail} source={{ uri: video.thumbnail}} />

            <View>
            <View style={styles.timeContainer}>

<Text style={styles.time}>{video.duration}:{seconds}</Text>



</View>


            </View>



            


            { /* Title row */ }

            <View style={styles.titleRow}>
                {/*Avatar*/}

                <Image style={styles.avatar} source= {{uri: video.user.image }} />

                {/*Middle container: Title, subtitle, etx*/}


                <View style={styles.middleContainer}>

                    <Text style={styles.title}> {video.title}

                    Italy tops Spain on penalties to reach EURO 2020 final 

                    </Text>

                    <Text style={styles.subtitle}>{video.user.name} {viewsString} {video.createdAt}   </Text>



                </View>

                <Image style={styles.avatar} source={{uri: ''}}/>

                <Entypo name="dots-three-vertical" size={16} color="white"/>


                {/*Icon */}



            </View>



            </View>



            





        
    )
}



const styles = StyleSheet.create({
    videoCard: {





    },



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