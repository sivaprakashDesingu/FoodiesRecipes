import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './../pages/container/Home/Home';
import Personalization from '../pages/container/Personalization/Personalization';
import RecipeListing from './../pages/container/Recipe/RecipeListing'
import RecipeDetails from './../pages/container/Recipe/RecipeDetails'
import Main from  './../pages/container/Main'
import Dashboard from './../pages/container/Dashboard/Dashboard'
const AppNavigator = createStackNavigator({

  Main : {
    screen:Main,
    navigationOptions: {
      header: null,
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    }
  },
  Personalization: {
    screen: Personalization
  },
  RecipeListing: {
    screen: RecipeListing
  },
  RecipeDetails: {
    screen: RecipeDetails
  },
  Dashboard: {
    screen: Dashboard
  }
},
  {
    initialRouteName: 'Dashboard',
  });

export default createAppContainer(AppNavigator);