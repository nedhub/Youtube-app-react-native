import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import styles from './VideoScreen/styles';



import video from '../assets/video.json';
import AntDesign from '@expo/vector-icons/build/AntDesign';

const VideoScreen = () => {




    let viewsString = video.views.toString();
    if (video.views > 1_000_000) {
        viewsString = (video.views / 1_000_000).toFixed(1) + 'm'
    } else if (video.views > 1_000) {
        viewsString = (video.views / 1_000).toFixed(1) + 'k'
    }


    // let viewsString = ( video.views / 1_000).toFixed(1) + 'k'


    

    return (
        <SafeAreaView style={{backgroundColor: '#2b2b2b', flex: 1}}>
            {/* <Text> Video Screen </Text> */}


            <Image style={styles.videoPlayer} source={{ uri: video.thumbnail }} />
            

            <View>
            <Text style={styles.videoInfoContainer}></Text>
            <Text style={styles.tags}>{video.tags}</Text>
            <Text style = {styles.title}>{video.title}</Text>
            <Text style = {styles.subtitle}>{viewsString} {video.createdAt}</Text>

            </View>







            <View style={styles.actionListContainer}>



            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.actionListContainer}>


                <View style={styles.actionListItem}>
                    <AntDesign name="like1" size={30} color="lightgrey" />
                    <Text style={styles.actionText}>{video.likes}</Text>
                </View>
            {/* </View> */}


            <View style={styles.actionListItem}>
                <AntDesign name="dislike2" size={30} color="lightgrey" />
                <Text style={styles.actionText}>{video.dislikes}</Text>


            </View>


            <View style={styles.actionListItem}>
            <AntDesign name="export" size={30} color="lightgrey" />
            <Text style={styles.actionText}>{video.dislikes}</Text>

            </View>


            <View style={styles.actionListItem}>
            <AntDesign name="download" size={30} color="lightgrey" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>


            <View style={styles.actionListItem}>
            <AntDesign name="download" size={30} color="lightgrey" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>

            <View style={styles.actionListItem}>
            <AntDesign name="download" size={30} color="lightgrey" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>

            {/* <View style={styles.actionListItem}>
            <AntDesign name="download" size={30} color="lightgrey" />
            <Text style={styles.actionText}>{video.dislikes}</Text>
            </View> */}

            </ScrollView>

            </View>






            <View style={{flexDirection: 'row'}}>


                <Image style = {styles.avatar } source={{ uri: video.user.image}} />



                <View>

                    <Text style={{color: "white", fontSize: 18}}>{video.user.name}</Text>
                    <Text>{video.user.subscribers}</Text>

                </View>

                <Text style={{color: 'white', fontSize: 18}}>Subscribe</Text>






            </View>
            

            
        </SafeAreaView>

    )






















    
       
}

export default VideoScreen; 
