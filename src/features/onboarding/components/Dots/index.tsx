import React from 'react';
import {View} from 'react-native';
import {DotProps} from '../../types';
import {styles} from './styles';

const dots = [1, 2, 3, 4];

const Dots: React.FC<DotProps> = ({activeDot}) => {
  return (
    <View style={styles.dotContainer}>
      {dots.map(item => (
        <View
          key={item}
          style={[styles.dot, item === activeDot && styles.activeDot]}
        />
      ))}
    </View>
  );
};

export default Dots;
