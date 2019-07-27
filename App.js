import React from 'react';
import AppNavigator from './config/AppNavigator'
import { Provider as PaperProvider } from 'react-native-paper';
import * as Font from 'expo-font'
export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'RobotoBlack': require('./assets/fonts/Roboto/Roboto-Black.ttf'),
      'RobotoBold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
      'RobotoRegular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    });
  }
  render() {
    return (
       <PaperProvider>
          <AppNavigator/>
       </PaperProvider>
     
    );
  }
}