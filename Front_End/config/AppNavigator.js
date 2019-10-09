import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './../pages/container/Home';
import InitialDetails from '../pages/container/initialDetails';
import Recipe from './../pages/container/Recipe'


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