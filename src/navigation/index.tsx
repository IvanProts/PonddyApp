import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {STACKS} from '../types/navigation';
import OnboardingStack from './OnboardingStack';

const Navigation: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const {ONBOARDING} = STACKS;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ONBOARDING}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={ONBOARDING} component={OnboardingStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
