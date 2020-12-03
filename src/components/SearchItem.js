import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

function SearchItem({ item }) {
    const navigation = useNavigation()
    const { colors } = useTheme()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("videoplayer", { videoId: item.id.videoId, title: item.snippet.title })}
            style={{
                marginBottom: 10,
                flexDirection: 'row',
                margin: 10,
                marginBottom: 0
            }}>
            <Image
                style={{
                    width: '45%',
                    height: 100
                }}
                source={{
                    uri: `https://i.ytimg.com/vi/${item.id.videoId}/hqdefault.jpg`
                }}
            />

            <View style={{ paddingLeft: 7 }}>
                <Text style={{
                    fontSize: 17,
                    color: colors.IconColor,
                    width: Dimensions.get("screen").width / 2,
                }}
                    ellipsizeMode="tail"
                    numberOfLines={3}>
                    {item.snippet.title} </Text>
                <Text style={{
                    fontSize: 12,
                    color: colors.IconColor
                }}>{item.snippet.channelTitle}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default SearchItem;