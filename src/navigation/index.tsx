import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import OnboardingStack from './OnboardingStack';

const NavigationComponent = () => {
  return (
    <NavigationContainer>
      <OnboardingStack />
    </NavigationContainer>
  );
};

export default NavigationComponent;
