'use strict';

import 'babel-polyfill';
import React, { AppRegistry } from 'react-native';
import App from './app/containers/App';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore'

const store = configureStore();

class HackerNewsViewer extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('HackerNewsViewer', () => HackerNewsViewer);
