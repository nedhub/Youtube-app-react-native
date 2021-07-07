import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import VideoListItem from '../components/VideoListItem';
import videos from '../assets/videos.json';

const HomeScreen = () => {
    return (
        <View>
            <VideoListItem video={videos[0]}/>
            <VideoListItem video={videos[1]}/>
        </View>
    )
}


const styles = StyleSheet.create({





});

export default HomeScreen
