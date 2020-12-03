import React from 'react';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Suscribe from './src/screens/Suscribe';
import { MaterialIcons } from '@expo/vector-icons';
import { combineReducers, createStore } from 'redux';
import { Provider, useSelector } from 'react-redux'
import reducer from './src/reducers/reducer';
import Notifications from './src/screens/Notifications';
import themeReducer from './src/reducers/ThemeReducer';


const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    HeaderColor: '#404040',
    IconColor: 'white',
    TabIcon: 'white'
  }
}
const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    HeaderColor: 'white',
    IconColor: 'black',
    TabIcon: 'red'
  }
}
const rooReducer = combineReducers({
  cardData: reducer,
  myDarMode: themeReducer
})
const store = createStore(rooReducer)
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator()
const RootHome = () => {
  const { colors } = useTheme()
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = 'home'
          } else if (route.name === 'explore') {
            iconName = 'explore'
          } else if (route.name === 'suscribe') {
            iconName = 'subscriptions'
          } else if (route.name === 'notifications') {
            iconName = 'notifications'
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })
      }
      tabBarOptions={{
        activeTintColor: colors.TabIcon,
        inactiveTintColor: 'gray',
      }}>
      <Tabs.Screen name='home' component={Home} />
      <Tabs.Screen name='explore' component={Explore} />
      <Tabs.Screen name='suscribe' component={Suscribe} options={{ tabBarBadge: 3 }} />
      <Tabs.Screen name='notifications' component={Notifications} options={{ tabBarBadge: 4 }} />
    </Tabs.Navigator>
  )
}
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}
export function Navigation() {
  const currentTheme = useSelector(state => state.myDarMode)
  return (
    <NavigationContainer theme={currentTheme ? customDarkTheme : customDefaultTheme}>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='rootHome' component={RootHome} />
        <Stack.Screen name='search' component={Search} />
        <Stack.Screen name='videoplayer' component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

