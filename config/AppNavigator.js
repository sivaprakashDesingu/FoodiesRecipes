import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './../pages/Home';
import InitialDetails from '../pages/LandingPage/initialDetails';

const AppNavigator = createStackNavigator({
    Home: { 
      screen: Home,
      navigationOptions: {
        header: null,
      }
    },
    InitialDetails: { 
      screen: InitialDetails,
    }
  },
    {
      initialRouteName: 'Home',
    });

export default createAppContainer(AppNavigator);