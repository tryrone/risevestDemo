import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ONBOARDING, SIGN_UP} from './constants';
import Onboarding from '../pages/Onboarding';
import SignUp from '../pages/SignUp';

const OnboardingStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={ONBOARDING}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ONBOARDING} component={Onboarding} />
      <Stack.Screen name={SIGN_UP} component={SignUp} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
