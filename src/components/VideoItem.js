import React from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';

function VideoItem({ item }) {
    const navigation = useNavigation()
    const { colors } = useTheme()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("videoplayer", { videoId: item.id.videoId, title: item.snippet.title })}
            style={{
                flex: 1,
                marginBottom: 10
            }}>
            <View>
                <Image
                    style={{
                        width: '100%',
                        height: 200
                    }}
                    source={{
                        uri: `https://i.ytimg.com/vi/${item.id.videoId}/hqdefault.jpg`
                    }} />
            </View>
            <View style={{
                flexDirection: 'row',
            }}>
                <MaterialCommunityIcons style={{ margin: 5 }} name="account-circle" size={35} color="black" />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{
                        fontSize: 23,
                        color: colors.IconColor,
                        width: Dimensions.get("screen").width - 50,
                    }}
                        ellipsizeMode="tail"
                        numberOfLines={2}>
                        {item.snippet.title} </Text>
                    <Text style={{
                        fontSize: 18,
                        color: colors.IconColor
                    }}>{item.snippet.channelTitle}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default VideoItem;