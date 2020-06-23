import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen.js'
import DetailsScreen from './DetailsScreen.js'
import { STARGATE_HOME, STARGATE_DETAILS } from '../routes.js';

export default createStackNavigator(
  {
    [STARGATE_HOME]: HomeScreen,
    [STARGATE_DETAILS]: DetailsScreen,
  },
  {
    headerMode: 'none',
  }
)