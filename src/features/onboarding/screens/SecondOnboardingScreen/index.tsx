import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, Text} from 'react-native';
import {SCREENS} from '../../../../types/navigation';
import Dots from '../../components/Dots';
import NextButton from '../../components/NextButton';
import {styles} from '../../mainStyles';

const SecondOnboardingScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <ImageBackground
      source={require('../../../../assets/images/onboarding_background_2.png')}
      style={styles.backgroundImage}>
      <Text style={styles.title}>Track & Boost Your Learning</Text>
      <Text style={styles.text}>
        Learn effectively with our unique “My Learning” feature!
      </Text>
      <Dots activeDot={4} />
      <NextButton onPress={() => navigation.navigate(SCREENS.GRAMMAR)} />
    </ImageBackground>
  );
};

export default SecondOnboardingScreen;
