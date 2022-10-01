import React, {memo} from 'react';
import {View} from 'react-native';
import {styles} from './styles';

const Divider: React.FC = () => {
  return <View style={styles.divider} />;
};

export default memo(Divider);
