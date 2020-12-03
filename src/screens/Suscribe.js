import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';
import NotificationItem from '../components/NotificationItem';

function Suscribe(props) {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView>
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
            </ScrollView>

        </View>
    );
}

export default Suscribe;