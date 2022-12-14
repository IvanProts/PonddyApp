import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useGetWordMutation, useGetWordsQuery} from '../../../../api/grammar';
import GrammarHeader from '../../components/GrammarHeader';
import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheetView from '../../components/BottomSheet';
import Sound from 'react-native-sound';
import Divider from '../../components/Divider';
import AudioButton from '../../components/AudioButton';
import {Segment} from '../../../../types/enteties';
import Anchor from '../../components/Anchor';
import {styles} from './styles';

const BOTTOM_SHEET_RENDER_TIME = 400;

const GrammarScreen: React.FC = () => {
  const {data} = useGetWordsQuery();
  const [getWord, {data: segmentInfo, error}] = useGetWordMutation();
  const [chosenItemId, setChosenItemId] = useState<number>();
  const [chosenItem, setChosenItem] = useState<Segment>();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const sound = useMemo(
    () => new Sound(data?.sentences[0].voice),
    [data?.sentences],
  );

  const segments = useMemo(
    () => data?.sentences[0].segments,
    [data?.sentences],
  );

  const playTranslation = useCallback(() => {
    sound.play();
  }, [sound]);

  const onItemPress = useCallback(
    async (index: number, item: Segment) => {
      setChosenItemId(index);
      await getWord({ids: [item.id]});
      bottomSheetRef.current?.close();
      setTimeout(() => {
        setChosenItem(item);
        bottomSheetRef.current?.snapToIndex(0);
      }, BOTTOM_SHEET_RENDER_TIME);
    },
    [getWord],
  );

  const renderSegments = useCallback(() => {
    return (
      <View style={styles.topWrapper}>
        <AudioButton onPress={playTranslation} />
        <FlatList
          data={segments}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <>
                {item.anchor && <Anchor isPositionAbsolute />}
                <TouchableOpacity
                  disabled={!item.levels}
                  key={index}
                  style={[
                    styles.item,
                    chosenItemId === index && styles.chosenItem,
                    !item.levels && styles.chosenItemDisabled,
                  ]}
                  onPress={() => onItemPress(index, item)}>
                  <Text style={styles.segmentStyle}>{item.word}</Text>
                </TouchableOpacity>
              </>
            );
          }}
        />
      </View>
    );
  }, [chosenItemId, onItemPress, playTranslation, segments]);

  return (
    <>
      <GrammarHeader />
      <View style={styles.contentWrapper}>
        <Text style={styles.lessonName}>{data?.name}</Text>
        <View style={styles.segmentsWrapper}>
          {renderSegments()}
          <Divider />
          <View style={styles.paddingVertical}>
            <Text style={styles.sentencesTrans}>
              {data?.sentences[0].trans}
            </Text>
          </View>
          <Divider />
          <View style={styles.keyWordsWrapper}>
            {chosenItem?.anchor && <Anchor />}
            <Text style={styles.keyWordsText}>Key Words: ?/?/?</Text>
          </View>
        </View>
      </View>
      {segmentInfo && (
        <BottomSheetView
          play={playTranslation}
          bottomRef={bottomSheetRef}
          chosenItem={chosenItem}
          itemInfo={segmentInfo[0]}
        />
      )}
    </>
  );
};

export default GrammarScreen;
