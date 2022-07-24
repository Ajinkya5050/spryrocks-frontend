import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

//--- common
import Loading from '../screens/common/Loading';

//--- Auth
import PersonalInfo from '../screens/auth/PersonalInfo';
import EducationInfo from '../screens/auth/EducationInfo';
import CourceInfo from '../screens/auth/CourceInfo';
import WorkExpierence from '../screens/auth/WorkExpierence';
import YourHobbies from '../screens/auth/YourHobbies';
import GladToUser from '../screens/auth/GladToUser';

//---- Main Stack
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'Loading'} component={Loading} />
        <Stack.Screen name={'PersonalInfo'} component={PersonalInfo} />
        <Stack.Screen name={'EducationInfo'} component={EducationInfo} />
        <Stack.Screen name={'CourceInfo'} component={CourceInfo} />
        <Stack.Screen name={'WorkExpierence'} component={WorkExpierence} />
        <Stack.Screen name={'Hobbies'} component={YourHobbies} />
        <Stack.Screen name={'Glad'} component={GladToUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
