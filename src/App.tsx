import React from 'react';
import {StatusBar} from 'react-native';
import SafeAreaWrapper from './components/SafeAreaWrapper';
import Navigation from './navigation';

const App = () => {
  return (
    <SafeAreaWrapper>
      <StatusBar barStyle="dark-content" backgroundColor={'blue'} />
      <Navigation />
    </SafeAreaWrapper>
  );
};

export default App;
