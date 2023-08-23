import React from 'react';
import NavigationComponent from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from 'navigation/RootNavigation';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from 'rtk/store';
import {ToastProvider} from 'react-native-toast-notifications';
import {AppContext} from 'context/appContext';

function App(): JSX.Element {
  const [appData, setAppData] = React.useState<Record<any, any>>({
    rates: {
      buy_rate: 0,
      sell_rate: 0,
    },
  });
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <ToastProvider
          placement="bottom"
          duration={5000}
          animationType="slide-in"
          animationDuration={250}>
          <AppContext.Provider
            value={{
              appData,
              setAppData,
            }}>
            <NavigationComponent />
          </AppContext.Provider>
        </ToastProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
