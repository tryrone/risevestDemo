import React from 'react';
import NavigationComponent from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from 'navigation/RootNavigation';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from 'rtk/store';
import {ToastProvider} from 'react-native-toast-notifications';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <ToastProvider
          placement="bottom"
          duration={5000}
          animationType="slide-in"
          animationDuration={250}>
          <NavigationComponent />
        </ToastProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
