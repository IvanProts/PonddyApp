import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SecondOnboardingScreen from '../features/onboarding/screens/SecondOnboardingScreen';
import FirstOnboardingScreen from '../features/onboarding/screens/FirstOnboardingScreen';
import {SCREENS} from '../types/navigation';

const OnboardingStack: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const {FIRST_ONBOARDING, SECOND_ONBOARDING} = SCREENS;

  return (
    <Stack.Navigator
      initialRouteName={FIRST_ONBOARDING}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={FIRST_ONBOARDING} component={FirstOnboardingScreen} />
      <Stack.Screen
        name={SECOND_ONBOARDING}
        component={SecondOnboardingScreen}
      />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
