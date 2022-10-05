import React, {memo, useCallback, useMemo} from 'react';
import {Text, View} from 'react-native';
import AudioButton from '../AudioButton';
import Divider from '../Divider';
import LevelSection from '../LevelSection';
import MoreButton from '../MoreButton';
import SelectedItemBox from '../SelectedItemBox';
import {styles} from './styles';
import BottomSheet from '@gorhom/bottom-sheet';
import {BottomSheetType} from '../../types';
import Sound from 'react-native-sound';

const BottomSheetView: React.FC<BottomSheetType> = ({
  chosenItem,
  bottomRef,
  itemInfo,
}) => {
  const snapPoint = useMemo(() => ['50%'], []);
  const sound = useMemo(() => new Sound(itemInfo?.voice), [itemInfo?.voice]);

  const playTranslation = useCallback(() => {
    sound.play();
  }, [sound]);
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
          <AudioButton onPress={playTranslation} />
          <Text style={styles.textColor}>{itemInfo?.pinyin}</Text>
        </View>
        <LevelSection chosenItem={itemInfo} />
      </View>
    </BottomSheet>
  );
};

export default memo(BottomSheetView);
