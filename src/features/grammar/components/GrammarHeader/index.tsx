import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

const GRADIENT_COLORS = ['#3585BD', '#6CAEE7'];

const GrammarHeader: React.FC = () => {
  return (
    <LinearGradient colors={GRADIENT_COLORS} style={styles.linearGradient}>
      <View style={styles.title}>
        <TouchableWithoutFeedback>
          <Image
            source={require('../../../../assets/icons/arrow_right.png')}
            style={styles.backButton}
          />
        </TouchableWithoutFeedback>
        <Text style={styles.text}>New Grading Standard</Text>
      </View>
    </LinearGradient>
  );
};

export default GrammarHeader;
