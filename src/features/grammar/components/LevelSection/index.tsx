import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {LevelSectionType} from '../../types';
import {styles} from './styles';

const LevelSection: React.FC<LevelSectionType> = ({chosenItem}) => {
  return (
    <>
      <View style={styles.contentBox}>
        <View style={styles.buttonContainer}>
          <Text style={styles.lvlText}>
            {`LVL ${chosenItem?.level_hsk || chosenItem?.level_hsk_3}`}
          </Text>
        </View>
        <Text style={styles.posText}>{chosenItem?.pos}</Text>
        <Text style={styles.wordText}>{chosenItem?.simp}</Text>
        <Text style={styles.word}>{chosenItem?.trad}</Text>
      </View>
      <View style={styles.contentBox}>
        <Text style={styles.translationText}>{chosenItem?.english}</Text>
      </View>
    </>
  );
};

export default memo(LevelSection);
