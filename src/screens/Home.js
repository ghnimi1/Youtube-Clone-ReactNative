import React from 'react';
import { Text, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import VideoItem from '../components/VideoItem';

function Home(props) {
    const datas = useSelector(state => state.cardData)
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <FlatList
                data={datas}
                keyExtractor={(item) => item.id.videoId}
                renderItem={({ item }) => {
                    return (<VideoItem item={item} />)
                }}
            />
        </View >

    );
}
export default Home;