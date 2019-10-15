import React from 'react';
import AsyncStorage from 'react-native'
import AppNavigator from './config/AppNavigator'
import { Provider as PaperProvider } from 'react-native-paper';
import Toast, { DURATION } from 'react-native-easy-toast'
import * as Font from 'expo-font'

import { createStore } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store/store'
//import InitialReducer from './reducer/Initial-reducer'

//const store = createStore(InitialReducer)

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  }
  

  async componentDidMount() {
    await Font.loadAsync({
      'RobotoBlack': require('./assets/fonts/Roboto/Roboto-Black.ttf'),
      'RobotoBold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
      'RobotoRegular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    });
    this.refs.toast.show('hello world!', DURATION.LENGTH_LONG);
    this.setState({ fontLoaded: true });
 
  }

  render() {
    /*AsyncStorage.getItem('cookieUserToken', (err, result) => {
      alert(result)
    });*/
    return (
      <ReduxProvider store={store}>
        <PaperProvider>
          {this.state.fontLoaded ? <AppNavigator /> : null}
          <Toast
            ref="toast"
            style={{ backgroundColor: '#000', width: 200 }}
            position='bottom'
            positionValue={100}
            fadeInDuration={750}
            fadeOutDuration={1000}
            opacity={0.8}
            textStyle={{ color: '#fff' }}
          />

        </PaperProvider>
      </ReduxProvider>
    );
  }
}