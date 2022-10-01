import React, {memo} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {AudioButtonType} from '../../types';
import {styles} from './styles';

const AudioButton: React.FC<AudioButtonType> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
      <Image
        style={styles.icon}
        source={require('../../../../assets/icons/audio_tool.png')}
      />
    </TouchableOpacity>
  );
};

export default memo(AudioButton);
