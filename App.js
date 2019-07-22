import React from 'react';
import AppNavigator from './config/AppNavigator'
import { Provider as PaperProvider } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
       <PaperProvider>
          <AppNavigator/>
       </PaperProvider>
     
    );
  }
}