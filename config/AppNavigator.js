import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './../pages/Home';
import Recipe from './../pages/LandingPage/Recipe';

const AppNavigator = createStackNavigator(
  {
    Home: { 
      screen: Home,
      navigationOptions: {
        header: null,
      }
    },
    Recipe: { 
      screen: Recipe,
      navigationOptions: {
        header: null,
      }
    }
  },
    {
      initialRouteName: 'Home',
    }
);

export default createAppContainer(AppNavigator);