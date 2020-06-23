import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen.js'
import DetailsScreen from './DetailsScreen.js'
import { SPIDERMAN_HOME, SPIDERMAN_DETAILS } from '../routes.js';

export default createStackNavigator(
  {
    [SPIDERMAN_HOME]: HomeScreen,
    [SPIDERMAN_DETAILS]: DetailsScreen,
  },
  {
    headerMode: 'none',
  }
)