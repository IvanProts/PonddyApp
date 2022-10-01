import React, {memo} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';

type Props = {
  children: React.ReactNode;
};

const SafeAreaWrapper: React.FC<Props> = ({children}) => {
  return (
    <GestureHandlerRootView style={styles.safeAreaContainer}>
      <SafeAreaView style={styles.safeAreaContainer}>{children}</SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default memo(SafeAreaWrapper);
