import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './../pages/Home';
import InitialDetails from '../pages/LandingPage/initialDetails';
import Recipe from './../pages/LandingPage/Recipe'


const AppNavigator = createStackNavigator({
    Home: { 
      screen: Home,
      navigationOptions: {
        header: null,
      }
    },
    InitialDetails: { 
      screen: InitialDetails
    },
    Recipe : {
      screen : Recipe
    }
  },
    {
      initialRouteName: 'Home',
    });

export default createAppContainer(AppNavigator);