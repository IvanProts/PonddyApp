import React, {memo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';

type Props = {
  children: React.ReactNode;
};

const SafeAreaWrapper: React.FC<Props> = ({children}) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>{children}</SafeAreaView>
  );
};

export default memo(SafeAreaWrapper);
