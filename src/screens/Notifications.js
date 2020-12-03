import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Header from '../components/Header';
import NotificationItem from '../components/NotificationItem';

function Notifications(props) {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView>
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
            </ScrollView>
        </View>
    );
}

export default Notifications;