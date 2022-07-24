//import liraries
import React from 'react';
import {LogBox, StatusBar} from 'react-native';

import {colors} from './src/helpers/utils';
import MainStackNavigator from './src/navigation/Navigation';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

// create a component
const App = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <MainStackNavigator />
    </>
  );
};

//make this component available to the app
export default App;
