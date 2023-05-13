import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ABOUT_YOURSELF,
  CONFIRM_PIN,
  CREATE_PIN,
  ONBOARDING,
  SIGN_IN,
  SIGN_UP,
  SUCCESS_PAGE,
} from './constants';
import Onboarding from '../pages/Onboarding';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import AboutYourself from '../pages/SignUp/aboutYourself';
import SuccessPage from '../pages/SuccessPage';
import CreatePin from '../pages/CreatePin';
import ConfirmPin from '../pages/CreatePin/confirmPin';

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
      <Stack.Screen name={SUCCESS_PAGE} component={SuccessPage} />
      <Stack.Screen name={CREATE_PIN} component={CreatePin} />
      <Stack.Screen name={CONFIRM_PIN} component={ConfirmPin} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
