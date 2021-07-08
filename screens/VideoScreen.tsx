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






            <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 18,  borderColor: '#3d3d3d', borderTopWidth: 1, borderBottomWidth: 1}}>


                <Image style = {styles.avatar } source={{ uri: video.user.image}} />



                <View style={{marginHorizontal: 10, flex: 1}}>

                    <Text style={{color: "white", fontSize: 18, fontWeight: 'bold'}}>{video.user.name}</Text>
                    <Text style={{color: "grey", fontSize: 18}}>{video.user.subscribers}</Text>
                    
                    {/* <Text>{video.user.subscribers}</Text> */}

                </View>

                <Text style={{color: 'red', fontSize: 18, fontWeight: 'bold', padding: 10}}>Subscribe</Text>


            </View>


            


            <View>

                <View style={{padding: 10}}>




                </View>


                <Text style={{color: 'white', fontWeight: 'bold'}}> Comments 3</Text>

            <>
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 10, paddingVertical: 18,  borderColor: '#3d3d3d', borderTopWidth: 1, borderBottomWidth: 1}}>


                <Image style = {{width: 35, height: 35, borderRadius: 20}} source={{ uri: video.user.image}} />



                <View style={{marginHorizontal: 10, flex: 1}}>

                    <Text style={{color: "white", fontWeight: 'bold', marginLeft: 10,}}>It cant be</Text>
                    
                </View>

                

            

            </View>

            




            


            </>




            </View>
            

            
        </SafeAreaView>

    )






















    
       
}

export default VideoScreen; 
