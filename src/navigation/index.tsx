import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ABOUT_YOURSELF,
  BOTTOM_NAV,
  CONFIRM_PIN,
  CREATE_A_PLAN,
  CREATE_PIN,
  CREATE_PLAN_STEPS,
  ONBOARDING,
  PLANS_LIST,
  PLAN_DETAIL,
  PLAN_REVIEW,
  SIGN_IN,
  SIGN_UP,
  SUCCESS_PAGE,
} from './constants';
import SuccessPage from 'pages/SuccessPage';
import Onboarding from 'pages/Onboarding';
import SignUp from 'pages/SignUp';
import AboutYourself from 'pages/SignUp/aboutYourself';
import SignIn from 'pages/SignIn';
import CreatePin from 'pages/CreatePin';
import ConfirmPin from 'pages/CreatePin/confirmPin';
import BottomNavigation from 'pages/BottomNavigation';
import CreatePlan from 'pages/CreatePlan';
import PlanSteps from 'pages/CreatePlan/PlanSteps';
import PlanReview from 'pages/CreatePlan/PlanReview';
import Plan from 'pages/Plan';
import PlansList from 'pages/PlansList';
import LoadingScreen from 'pages/LoadingScreen';
import {useSelector} from 'react-redux';
import {RootState} from 'rtk/store';

const Stack = createStackNavigator();

const NavigationComponent = () => {
  const [isCheckingData, setIsCheckingData] = useState<boolean>(true);

  const authenticated = useSelector(
    (state: RootState) => state?.persistedReducer.auth.authenticated,
  );

  useEffect(() => {
    setTimeout(() => {
      setIsCheckingData(false);
    }, 5000);
  }, [isCheckingData]);

  console.log('authenticated', authenticated);

  const initialRoute = authenticated ? BOTTOM_NAV : ONBOARDING;

  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{headerShown: false}}>
      {isCheckingData ? (
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      ) : (
        <>
          <Stack.Screen name={ONBOARDING} component={Onboarding} />
          <Stack.Screen name={SIGN_UP} component={SignUp} />
          <Stack.Screen name={ABOUT_YOURSELF} component={AboutYourself} />
          <Stack.Screen name={SIGN_IN} component={SignIn} />
          <Stack.Screen name={CREATE_PIN} component={CreatePin} />
          <Stack.Screen name={CONFIRM_PIN} component={ConfirmPin} />
          <Stack.Screen name={SUCCESS_PAGE} component={SuccessPage} />
          <Stack.Screen name={BOTTOM_NAV} component={BottomNavigation} />
          <Stack.Screen name={CREATE_A_PLAN} component={CreatePlan} />
          <Stack.Screen name={CREATE_PLAN_STEPS} component={PlanSteps} />
          <Stack.Screen name={PLAN_REVIEW} component={PlanReview} />
          <Stack.Screen name={PLAN_DETAIL} component={Plan} />
          <Stack.Screen name={PLANS_LIST} component={PlansList} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default NavigationComponent;
