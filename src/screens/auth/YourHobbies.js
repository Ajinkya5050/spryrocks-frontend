//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {isEmpty} from 'lodash';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
// import MonthPicker from 'react-native-month-year-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {icons} from '../../helpers/iconConstants';
import {colors, fontFamily, fontSize} from '../../helpers/utils';
import {hp, statusBarHeight, wp} from '../../helpers/constants';
import {InputText} from '../../components';

// create a component
const YourHobbies = () => {
  const {goBack, navigate} = useNavigation();
  const [freeTime, setFreeTime] = useState('');
  const [userQuestion, setUserQuestion] = useState('');
  const [specialization, setSpecialization] = useState('');

  // const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
  // const [currentStartPress, setCurrentStartPress] = useState(false);

  // const [startDate, setStartDate] = useState('');
  // const [endDate, setEndDate] = useState('');

  const [progressDataAllow, setProgressDataAllow] = useState(false);

  const onPressBack = () => goBack();

  // const onPressDatePicker = () => setIsOpenDatePicker(true);
  // const onCloseDatePicker = (type, date) => {
  //   console.log('date', date);
  //   if (currentStartPress) {
  //     setStartDate(moment(date).format('MM.YYYY'));
  //   } else {
  //     setEndDate(moment(date).format('MM.YYYY'));
  //   }
  //   setCurrentStartPress(false);
  //   setIsOpenDatePicker(false);
  // };

  // const onPressStartPicker = () => {
  //   setIsOpenDatePicker(true);
  //   setCurrentStartPress(true);
  // };

  const onChangeFreeTime = text => setFreeTime(text);
  const onChangeUserQuestion = text => setUserQuestion(text);
  const onChangeSpecialization = text => setSpecialization(text);

  return (
    <View style={styles.container}>
      <Image
        source={icons.authTop}
        resizeMode={'contain'}
        style={styles.topAuthImg}
      />
      <View style={styles.contentContainer}>
        <KeyboardAwareScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={{alignSelf: 'flex-start'}}
            onPress={onPressBack}>
            <Image
              source={icons.back}
              style={styles.backIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <Image
            source={icons.spryLogo}
            style={styles.appLogo}
            resizeMode={'contain'}
          />
          <Text style={styles.fillTheFormText}>{'FILL THE FORM'}</Text>
          <Text style={styles.areaWithText}>
            {'area with'}
            <Text style={{color: colors.red}}>{' *'}</Text>
            <Text>{' must be filled'}</Text>
          </Text>
          <Text style={styles.personalInfoText}>YOUR HOBBIES</Text>

          <InputText
            isNotRequire
            textInputStyle={{
              paddingBottom: hp(18.47),
              paddingVertical: null,
              maxLength: hp(10),
            }}
            title={'How you spend your free time?'}
            placeholder={'hobbies, sport, etc... '}
            value={freeTime}
            onChangeText={onChangeFreeTime}
            multiline={true}
            // numberOfLines={10}
          />

          <Text style={styles.personalInfoText}>ADDITIONAL INFORMATION</Text>

          <InputText
            isNotRequire
            textInputStyle={{paddingBottom: hp(18.47)}}
            title={'Have any questions for us?'}
            placeholder={'Be in touch :) '}
            value={userQuestion}
            onChangeText={onChangeUserQuestion}
            multiline={true}
          />
          <View style={{flexDirection: 'row', marginTop: hp(4.06)}}>
            <TouchableOpacity
              style={{}}
              onPress={() => setProgressDataAllow(!progressDataAllow)}>
              <View
                style={{
                  backgroundColor: colors.primary,
                  height: wp(5.5),
                  width: wp(5.5),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    borderWidth: progressDataAllow ? 3 : 0,
                    borderColor: '#fff',
                    height: wp(3),
                    width: wp(3),
                    backgroundColor: !progressDataAllow
                      ? '#fff'
                      : 'transparent',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              </View>
            </TouchableOpacity>
            <Text
              style={{
                alignSelf: 'center',

                marginLeft: wp(4),
                fontSize: 16,
                fontFamily: fontFamily.bebasNeueRegular,
              }}>
              {'I CONSENT TO THE PROCESSING OF PERSONAL DATA'}
              <Text style={{color: colors.red}}>{'*'}</Text>
            </Text>
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigate('Glad')}>
            <Text style={styles.buttonTitle}>{'SEND FORM'}</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>

      <Image
        source={icons.spryText}
        resizeMode={'contain'}
        style={styles.spryTextImg}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    paddingTop: statusBarHeight + hp(1),
    marginHorizontal: wp(6.67),
  },
  spryTextImg: {
    height: '54%',
    position: 'absolute',
    bottom: 0,
    right: -wp(50),
    zIndex: -999,
  },
  backIcon: {
    width: wp(4.8),
    height: wp(4.8),
  },
  appLogo: {
    width: wp(37.86),
    height: hp(12.54),
    alignSelf: 'center',
  },
  fillTheFormText: {
    fontWeight: '700',
    textAlign: 'center',
    color: colors.black,
    marginTop: hp(6.56),
    fontSize: fontSize(36),
    fontFamily: fontFamily.bebasNeueRegular,
  },
  areaWithText: {
    fontSize: fontSize(12),
    color: colors.black,
    textAlign: 'center',
    fontFamily: fontFamily.robotoRegular,
  },
  personalInfoText: {
    fontWeight: '400',
    color: colors.primary,
    fontSize: fontSize(22),
    marginTop: hp(3.33),
    fontFamily: fontFamily.bebasNeueRegular,
  },
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
  buttonContainer: {
    paddingVertical: hp(1.23),
    borderRadius: wp(2.67),
    marginVertical: hp(2.33),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  buttonTitle: {
    fontSize: fontSize(22),
    color: colors.white,
    fontWeight: '700',
  },
  topAuthImg: {
    width: '100%',
    position: 'absolute',
    top: -statusBarHeight + hp(1),
  },
});

//make this component available to the app
export default YourHobbies;
