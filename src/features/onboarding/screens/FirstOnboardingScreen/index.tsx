import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, Text} from 'react-native';
import {
  OnboardingScreenNavigationProp,
  SCREENS,
} from '../../../../types/navigation';
import Dots from '../../components/Dots';
import NextButton from '../../components/NextButton';
import {styles} from '../../mainStyles';

const FirstOnboardingScreen: React.FC = () => {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  const handleNavigate = () => navigation.navigate(SCREENS.SECOND_ONBOARDING);
  return (
    <ImageBackground
      source={require('../../../../assets/images/onboarding_background_1.png')}
      style={styles.backgroundImage}>
      <Text style={styles.title}>App-Exclusive Live Lessons</Text>
      <Text style={styles.text}>
        Have fun learning with our star teachers in real-time today!
      </Text>
      <Dots activeDot={3} />
      <NextButton onPress={handleNavigate} />
    </ImageBackground>
  );
};

export default FirstOnboardingScreen;
