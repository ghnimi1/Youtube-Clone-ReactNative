import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

function NotificationItem(props) {
    const { colors } = useTheme()
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 5,
            }}>
                <MaterialCommunityIcons style={{ marginTop: 8 }} name="account-circle" size={35} color={colors.IconColor} />
                <Text style={{
                    fontSize: 17,
                    marginTop: 8,
                    color: colors.IconColor,
                    width: Dimensions.get("screen").width - 200,
                }}
                    ellipsizeMode="tail"
                    numberOfLines={2}>
                    Compatible side by side NDK version was not found.
                         </Text>
                <Image
                    style={{
                        width: '25%',
                        height: 60
                    }}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                    }} />
            </View>
        </View>
    );
}

export default NotificationItem;