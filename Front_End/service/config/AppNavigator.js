import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './../../pages/container/Home/Home';
import Personalization from '../../pages/container/Personalization/Personalization';
import RecipeListing from './../../pages/container/Recipe/RecipeListing'
import RecipeDetails from './../../pages/container/Recipe/RecipeDetails'
import Main from  './../../pages/container/Main'
import Dashboard from './../../pages/container/Dashboard/Dashboard'

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
    screen: Personalization,
    navigationOptions: {
      header: null,
    }
  },
  RecipeListing: {
    screen: RecipeListing
  },
  RecipeDetails: {
    screen: RecipeDetails,
    navigationOptions: {
      header: null,
    }
  },
  Dashboard: {
    screen: Dashboard
  }
},
  {
    initialRouteName: 'Main',
  });

export default createAppContainer(AppNavigator);