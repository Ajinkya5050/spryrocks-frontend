//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {icons} from '../../helpers/iconConstants';
import {colors, fontFamily, fontSize} from '../../helpers/utils';
import {hp, statusBarHeight, wp} from '../../helpers/constants';
import {InputText} from '../../components';

// create a component
const PersonalInfo = () => {
  const {navigate} = useNavigation();

  const [fullName, setFullName] = useState('');
  const [position, setPosition] = useState('');
  const [yourBirthday, setYourBirthday] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);

  const onPressDatePicker = () => setIsOpenDatePicker(true);
  const onCloseDatePicker = () => setIsOpenDatePicker(false);

  const onConfirmDate = date => {
    console.log('date', date);
    setIsOpenDatePicker(false);
    setYourBirthday(moment(date).format('DD.MM.YYYY'));
  };

  const onChangeFullName = text => setFullName(text);
  const onChangePosition = text => setPosition(text);
  const onChangeCity = text => setCity(text);
  const onChangePhoneNumber = text => setPhoneNumber(text);

  const onPressNext = () => navigate('EducationInfo');

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
          <Image
            source={icons.back}
            style={styles.backIcon}
            resizeMode={'contain'}
          />
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
          <Text style={styles.personalInfoText}>PERSONAL INFO</Text>

          <InputText
            title={'Full name'}
            placeholder={'type your full name'}
            value={fullName}
            onChangeText={onChangeFullName}
          />

          <InputText
            title={'Position'}
            placeholder={'for example: IOS developer, Designer'}
            value={position}
            onChangeText={onChangePosition}
          />

          <Text style={styles.inputTitleText}>
            {'Your birthday'}
            <Text style={{color: colors.red}}>{'*'}</Text>
          </Text>
          <TouchableOpacity activeOpacity={1} onPress={onPressDatePicker}>
            <TextInput
              editable={false}
              value={yourBirthday}
              onPressIn={onPressDatePicker}
              style={styles.inputContainer}
              placeholder={'dd.mm.yyyy'}
              placeholderTextColor={colors.placeHolder}
            />
          </TouchableOpacity>

          <InputText
            title={'City'}
            placeholder={'Kharkiv'}
            value={city}
            onChangeText={onChangeCity}
          />

          <InputText
            title={'Phone number'}
            placeholder={'+38 (0_ _) _ _ _ - _ _ - _ _'}
            keyboardType={'phone-pad'}
            value={phoneNumber}
            onChangeText={onChangePhoneNumber}
          />

          <TouchableOpacity
            onPress={onPressNext}
            style={styles.buttonContainer}>
            <Text style={styles.buttonTitle}>{'Next'}</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
        <DateTimePicker
          isVisible={isOpenDatePicker}
          onConfirm={onConfirmDate}
          onCancel={onCloseDatePicker}
          mode={'date'}
        />
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
export default PersonalInfo;
