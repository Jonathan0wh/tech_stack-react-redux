import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Header } from './src/components/common';
import reducers from './src/reducers';
import LibraryList from './src/components/LibraryList';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ createStore(reducers) }>
        <View style={{ flex: 1 }}>
          <Header headerText="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
      );
  }
}
