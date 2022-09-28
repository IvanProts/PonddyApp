import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NextButtonProps} from '../../types';
import {styles} from './styles';

const NextButton: React.FC<NextButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Next</Text>
    </TouchableOpacity>
  );
};

export default NextButton;
