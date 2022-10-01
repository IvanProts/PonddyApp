import React, {memo, useMemo} from 'react';
import {Text, View} from 'react-native';
import AudioButton from '../AudioButton';
import Divider from '../Divider';
import LevelSection from '../LevelSection';
import MoreButton from '../MoreButton';
import SelectedItemBox from '../SelectedItemBox';
import {styles} from './styles';
import BottomSheet from '@gorhom/bottom-sheet';
import {BottomSheetType} from '../../types';

const BottomSheetView: React.FC<BottomSheetType> = ({
  play,
  chosenItem,
  bottomRef,
}) => {
  const snapPoint = useMemo(() => ['50%'], []);
  return (
    <BottomSheet
      style={styles.bottomSheet}
      ref={bottomRef}
      index={-1}
      animateOnMount={true}
      snapPoints={snapPoint}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Vocabulary</Text>
        <Divider />
        <View style={styles.topContentBox}>
          <Text style={styles.textBigger}>{chosenItem?.word}</Text>
          <View style={styles.viewRow}>
            <SelectedItemBox isItemSelected />
            <MoreButton />
          </View>
        </View>
        <View style={styles.middleContent}>
          <AudioButton onPress={play} />
          <Text style={styles.textColor}>{chosenItem?.word}</Text>
        </View>
        <LevelSection chosenItem={chosenItem} />
      </View>
    </BottomSheet>
  );
};

export default memo(BottomSheetView);
