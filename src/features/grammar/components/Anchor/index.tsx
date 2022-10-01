import React, {memo} from 'react';
import {Image} from 'react-native';
import {AnchorType} from '../../types';
import {styles} from './styles';

const Anchor: React.FC<AnchorType> = ({isPositionAbsolute}) => {
  return (
    <Image
      style={[styles.anchor, isPositionAbsolute && styles.absolutePosition]}
      source={require('../../../../assets/icons/anchor.png')}
    />
  );
};

export default memo(Anchor);
