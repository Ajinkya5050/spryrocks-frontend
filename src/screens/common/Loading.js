//import liraries
import React, {useEffect} from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import {colors} from '../../helpers/utils';

// create a component
const Loading = ({navigation}) => {
  const {navigate} = useNavigation();

  useEffect(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'PersonalInfo'}],
      }),
    );
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={colors.grey} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});

//make this component available to the app
export default Loading;
