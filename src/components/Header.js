import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

function Header(props) {
    const navigation = useNavigation();
    const { colors } = useTheme();
    const dispatch = useDispatch()
    const currentTheme = useSelector(state => state.myDarMode)
    return (
        <View style={{
            height: 50,
            backgroundColor: colors.HeaderColor,
            flexDirection: 'row',
            justifyContent: 'space-between',
            elevation: 6
        }}>

            <View style={{ margin: 5, flexDirection: 'row' }}>
                <AntDesign name='youtube' size={35} color='red' />
                <Text style={{
                    marginLeft: 5,
                    marginTop: 3,
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: colors.IconColor
                }}>YouTube</Text>
            </View>
            <View style={{
                width: 150,
                flexDirection: 'row',
                margin: 5,
                marginTop: 10,
                justifyContent: 'space-between'
            }}>
                <Foundation name="video" size={26} color={colors.IconColor} />
                <AntDesign
                    onPress={() => navigation.navigate('search')}
                    name="search1" size={26} color={colors.IconColor} />
                <MaterialCommunityIcons
                    onPress={() => dispatch({ type: 'change_theme', payload: !currentTheme })}
                    name="theme-light-dark" size={26}
                    color={colors.IconColor} />
            </View>

        </View>
    );
}

export default Header;