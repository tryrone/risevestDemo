import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ABOUT_YOURSELF, ONBOARDING, SIGN_IN, SIGN_UP} from './constants';
import Onboarding from '../pages/Onboarding';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import AboutYourself from '../pages/SignUp/aboutYourself';

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
      <Stack.Screen name={ABOUT_YOURSELF} component={AboutYourself} />
      <Stack.Screen name={SIGN_IN} component={SignIn} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
