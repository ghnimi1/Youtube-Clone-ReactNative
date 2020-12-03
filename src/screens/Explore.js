import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import VideoItem from '../components/VideoItem';
const LittleCard = ({ name }) => {
    return (
        <View style={{
            backgroundColor: "red",
            height: 50,
            width: 180,
            borderRadius: 10,
            marginTop: 10
        }}>
            <Text style={{
                textAlign: "center",
                color: "white",
                fontSize: 22,
                fontWeight: 'bold',
                marginTop: 5
            }}>{name}</Text>
        </View>
    )
}
function Explore(props) {
    const datas = useSelector(state => state.cardData)
    const { colors } = useTheme()
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView>
                <View style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-around"
                }}>
                    <LittleCard name="Gaming" />
                    <LittleCard name="Trending" />
                    <LittleCard name="Music" />
                    <LittleCard name="News" />
                    <LittleCard name="Movies" />
                    <LittleCard name="Fashion" />
                </View>

                <Text style={{
                    margin: 8,
                    fontSize: 22,
                    borderBottomWidth: 1,
                    borderBottomColor: colors.IconColor,
                    color: colors.IconColor
                }}>Trending Videos</Text>
                <FlatList
                    data={datas}
                    keyExtractor={(item) => item.id.videoId}
                    renderItem={({ item }) => {
                        return (<VideoItem item={item} />)
                    }}
                />
            </ScrollView>
        </View >
    );
}

export default Explore;