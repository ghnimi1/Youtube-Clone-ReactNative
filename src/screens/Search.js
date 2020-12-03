import React, { useState } from 'react';
import { TextInput, View, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import SearchItem from '../components/SearchItem';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@react-navigation/native';

function Search({ navigation }) {
    const { colors } = useTheme()
    const API_KEY = 'AIzaSyB-41gHka0bDnXuvY4cHrJfl88rilZaUtc'
    const [value, setValue] = useState('')
    //const [datas, setData] = useState([])
    const datas = useSelector(state => state.cardData)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const fetchData = () => {
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${value}%20&type=video&key=${API_KEY}`)
            .then(re => re.json())
            .then(data => {
                setLoading(false)
                dispatch({ type: 'add', payload: data.items })
            })
    }
    return (
        <View style={{
            flex: 1,
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 5,
                elevation: 5,
                backgroundColor: colors.HeaderColor
            }}>
                <Ionicons
                    onPress={() => navigation.goBack()}
                    style={{ marginTop: 6 }}
                    name="md-arrow-back" size={32} color={colors.IconColor} />
                <TextInput
                    style={{
                        width: "70%",
                        backgroundColor: "#e6e6e6",
                    }}
                    value={value}
                    onChangeText={(text) => setValue(text)} />
                <MaterialIcons
                    onPress={() => fetchData()}
                    style={{ marginTop: 6 }}
                    name="send" size={32} color={colors.IconColor} />
            </View>
            {loading ? <ActivityIndicator style={{ marginTop: 10 }} size="large" color="red" /> : null}
            <FlatList
                data={datas}
                keyExtractor={(item) => item.id.videoId}
                renderItem={({ item }) => {
                    return (<SearchItem item={item} />)
                }}
            />
        </View>
    );
}

export default Search;