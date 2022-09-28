import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import FirstOnboardingScreen from '../features/onboarding/FirstOnboardingScreen';
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
        component={FirstOnboardingScreen}
      />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
