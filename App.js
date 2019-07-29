import React from 'react';
import AppNavigator from './config/AppNavigator'
import { Provider as PaperProvider } from 'react-native-paper';
import * as Font from 'expo-font'

import { createStore } from 'redux'
import { Provider as ReduxProvider} from 'react-redux'

import InitialReducer from './reducer/Initial-reducer'

const store = createStore(InitialReducer)

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
      <ReduxProvider store={store}>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </ReduxProvider>
    );
  }
}