import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen.js'
// import SpidermanHomeScreen from '../screen3/HomeScreen.js'
import DetailsScreen from './DetailsScreen.js'
import { BATMAN_HOME, BATMAN_DETAILS } from '../routes.js';

export default createStackNavigator(
  {
    [BATMAN_HOME]: HomeScreen,
    // [SPIDERMAN_HOME]: SpidermanHomeScreen,
    [BATMAN_DETAILS]: DetailsScreen,
  },
  {
    headerMode: 'none',
  }
)