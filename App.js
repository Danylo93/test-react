import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import Rotas from './src/routes/index';

export default class App extends Component {
  render() {
      return (
        <Provider store={store}>
              <Rotas/>
          </Provider>
      );
  }
}
