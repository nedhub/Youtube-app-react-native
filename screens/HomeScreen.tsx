import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import VideoListItem from '../components/VideoListItem';
import videos from '../assets/videos.json';

const HomeScreen = () => {
    return (
        <View>
            <FlatList 
            data={videos} 
            renderItem={({ item }) => <VideoListItem video={item} />}/>


            {/* <VideoListItem video={videos[0]}/>
            <VideoListItem video={videos[1]}/>
            <VideoListItem video={videos[3]}/> */}
        </View>
    )
}


const styles = StyleSheet.create({





});

export default HomeScreen
