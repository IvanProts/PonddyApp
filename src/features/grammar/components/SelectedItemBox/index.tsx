import {TouchableOpacity} from '@gorhom/bottom-sheet';
import React, {memo} from 'react';
import {Image} from 'react-native';
import {SelectedItemType} from '../../types';
import {styles} from './styles';

const SelectedItemBox: React.FC<SelectedItemType> = ({isItemSelected}) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Image
        source={
          isItemSelected
            ? require('../../../../assets/icons/selected_item_icon.png')
            : null
        }
      />
    </TouchableOpacity>
  );
};

export default memo(SelectedItemBox);
