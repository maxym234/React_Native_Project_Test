// import { createStackNavigator } from 'react-navigation-stack';
// import HomeScreen from './src/screen3/HomeScreen.js'
// import DetailsScreen from './src/screen3/DetailsScreen.js'
// import { SPIDERMAN_HOME, SPIDERMAN_DETAILS } from './src/routes.js';

// export default createStackNavigator(
//   {
//     [SPIDERMAN_HOME]: HomeScreen,
//     [SPIDERMAN_DETAILS]: DetailsScreen,
//   },
//   {
//     headerMode: 'none',
//   }
// )

import React from 'react';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import One from './src/screen1';
import Two from './src/screen2';
import Three from './src/screen3';
import BLUE from './constants.js';

export default createDrawerNavigator(
  {
    Screen1: {
      screen: One,
      navigationOptions: {
        drawerLabel: 'Stargate',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name='grade' size={24} style={{ color: tintColor }}/>
        )
      }
    },
    Screen2: {
      screen: Two,
      navigationOptions: {
        drawerLabel: 'Batman',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name='favorite' size={24} style={{ color: tintColor }}/>
        )
      }
    },
    Screen3: {
      screen: Three,
      navigationOptions: {
        drawerLabel: 'Spiderman',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name='pets' size={24} style={{ color: tintColor }}/>
        )
      }
    }
  },
  {
    initialRouteName: 'Screen1',
    contentOptions: {
      activeTintColor: BLUE,
      itemsContainerStyle:{
        marginVertical: 65,
      }
    }
  }
)
// export default createBottomTabNavigator(
//   {
//     Stargate: One,
//     Batman: Two,
//     Spiderman: Three,
//   },
//   {
//     navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'Stargate') {
//           iconName = focused ? 'ios-videocam' : 'ios-play'
//         }else if(routeName === 'Batman'){
//           iconName = focused ? 'ios-videocam' : 'ios-play' 
//         }else if(routeName === 'Spiderman'){
//           iconName = focused ? 'ios-videocam' : 'ios-play' 
//         }
//         return <Ionicons name={iconName} size={25} color={tintColor}/>
//       },
//       tabBarOptions: {
//         activeTintColor: BLUE,
//         inactiveTintColor: 'grey',
//       },
//     }),
//   }
// )
