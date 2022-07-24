//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import {hp, wp} from '../../helpers/constants';
import {colors, fontFamily, fontSize} from '../../helpers/utils';

// create a component
const InputText = ({
  title,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  isNotRequire,
}) => {
  return (
    <>
      <Text style={styles.inputTitleText}>
        {title}
        {!isNotRequire && <Text style={{color: colors.red}}>{'*'}</Text>}
      </Text>
      <TextInput
        style={styles.inputContainer}
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholderTextColor={colors.placeHolder}
      />
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  inputTitleText: {
    fontWeight: '500',
    color: colors.black,
    marginTop: hp(2.46),
    marginHorizontal: wp(4),
    fontSize: fontSize(16),
    fontFamily: fontFamily.robotoMedium,
  },
  inputContainer: {
    borderWidth: 1,
    fontWeight: '400',
    marginTop: hp(1),
    color: colors.black,
    borderRadius: wp(0.8),
    fontSize: fontSize(16),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.35),
    fontFamily: fontFamily.robotoRegular,
  },
});

//make this component available to the app
export default InputText;
