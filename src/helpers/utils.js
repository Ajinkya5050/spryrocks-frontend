import {RFValue} from 'react-native-responsive-fontsize';

export const colors = {
  white: '#fff',
  black: '#000',
  primary: '#7A4ED9',
  lightPrimary: '#B1EDA8',
  grey: '#717E68',
  red: '#FF0000',
  placeHolder: '#C2C2C2',
};

export const fontFamily = {
  bebasNeueRegular: 'BebasNeue-Regular',
  robotoRegular: 'Roboto-Regular',
  robotoMedium: 'Roboto-Medium',
};

export const fontSize = val => RFValue(val, 812);
