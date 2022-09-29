import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import SafeAreaWrapper from './components/SafeAreaWrapper';
import Navigation from './navigation';
import {setupStore} from './store';

const App = () => {
  const store = setupStore();
  const isStatusBarVisible = store.getState().ui.showStatusBar;

  return (
    <SafeAreaWrapper>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'blue'}
        hidden={isStatusBarVisible}
      />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaWrapper>
  );
};

export default App;
