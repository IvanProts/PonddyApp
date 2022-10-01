import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum SCREENS {
  FIRST_ONBOARDING = 'First onboarding screen',
  SECOND_ONBOARDING = 'Second onboarding screen',
  GRAMMAR = 'Grammar screen',
}

export enum STACKS {
  ONBOARDING = 'Onboarding Stack',
}

export type MainStackParamList = {
  [STACKS.ONBOARDING]: undefined;
};

export type OnboardingStackParamList = {
  [SCREENS.FIRST_ONBOARDING]: NavigatorScreenParams<FirstOnboardingScreenStackParamList>;
  [SCREENS.SECOND_ONBOARDING]: NavigatorScreenParams<SecondOnboardingScreenStackParamList>;
};

export type FirstOnboardingScreenStackParamList = {
  [SCREENS.FIRST_ONBOARDING]: undefined;
};

export type SecondOnboardingScreenStackParamList = {
  [SCREENS.SECOND_ONBOARDING]: undefined;
};

export type OnboardingScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<MainStackParamList, STACKS.ONBOARDING>,
  CompositeNavigationProp<
    NativeStackNavigationProp<
      FirstOnboardingScreenStackParamList,
      SCREENS.FIRST_ONBOARDING
    >,
    NativeStackNavigationProp<SecondOnboardingScreenStackParamList>
  >
>;
