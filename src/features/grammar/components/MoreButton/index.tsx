import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const MoreButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>More</Text>
    </TouchableOpacity>
  );
};

export default memo(MoreButton);
