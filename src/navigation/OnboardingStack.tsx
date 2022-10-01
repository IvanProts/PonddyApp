import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SecondOnboardingScreen from '../features/onboarding/screens/SecondOnboardingScreen';
import FirstOnboardingScreen from '../features/onboarding/screens/FirstOnboardingScreen';
import {SCREENS} from '../types/navigation';
import GrammarScreen from '../features/grammar/screens/GrammarScreen';

const OnboardingStack: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const {FIRST_ONBOARDING, SECOND_ONBOARDING, GRAMMAR} = SCREENS;

  return (
    <Stack.Navigator
      initialRouteName={FIRST_ONBOARDING}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={FIRST_ONBOARDING} component={FirstOnboardingScreen} />
      <Stack.Screen
        name={SECOND_ONBOARDING}
        component={SecondOnboardingScreen}
      />
      <Stack.Screen name={GRAMMAR} component={GrammarScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
