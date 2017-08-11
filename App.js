import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Header } from './src/components/common';
import reducers from './src/reducers';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ createStore(reducers) }>
        <View>
          <Header headerText="Tech Stack" />
        </View>
      </Provider>
      );
  }
}
