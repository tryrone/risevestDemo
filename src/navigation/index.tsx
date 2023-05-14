import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ABOUT_YOURSELF,
  BOTTOM_NAV,
  CONFIRM_PIN,
  CREATE_PIN,
  ONBOARDING,
  SIGN_IN,
  SIGN_UP,
  SUCCESS_PAGE,
} from './constants';
import SuccessPage from '../pages/SuccessPage';
import Onboarding from '../pages/Onboarding';
import SignUp from '../pages/SignUp';
import AboutYourself from '../pages/SignUp/aboutYourself';
import SignIn from '../pages/SignIn';
import CreatePin from '../pages/CreatePin';
import ConfirmPin from '../pages/CreatePin/confirmPin';
import BottomNavigation from '../pages/BottomNavigation';

const NavigationComponent = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={BOTTOM_NAV}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={ONBOARDING} component={Onboarding} />
        <Stack.Screen name={SIGN_UP} component={SignUp} />
        <Stack.Screen name={ABOUT_YOURSELF} component={AboutYourself} />
        <Stack.Screen name={SIGN_IN} component={SignIn} />
        <Stack.Screen name={CREATE_PIN} component={CreatePin} />
        <Stack.Screen name={CONFIRM_PIN} component={ConfirmPin} />
        <Stack.Screen name={SUCCESS_PAGE} component={SuccessPage} />
        <Stack.Screen name={BOTTOM_NAV} component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationComponent;
