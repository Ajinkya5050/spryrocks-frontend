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
import {isEmpty} from 'lodash';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker from 'react-native-modal-datetime-picker';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {icons} from '../../helpers/iconConstants';
import {colors, fontFamily, fontSize} from '../../helpers/utils';
import {hp, statusBarHeight, wp} from '../../helpers/constants';
import {InputText} from '../../components';

// create a component
const WorkExpierence = () => {
  const {goBack, navigate} = useNavigation();
  const [educationInstitution, setEducationInstitution] = useState('');
  const [specialization, setSpecialization] = useState('');

  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
  const [endDatePicker, setEndDatePicker] = useState(false);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const onPressBack = () => goBack();

  const onConfirmStartDate = date => {
    setStartDate(moment(date).format('MM.YYYY'));
    setIsOpenDatePicker(false);
  };

  const onConfirmEndDate = date => {
    setEndDate(moment(date).format('MM.YYYY'));
    setEndDatePicker(false);
  };

  const onChangeInstitute = text => setEducationInstitution(text);
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
          <Text style={styles.personalInfoText}>Work EXPIERENCE</Text>

          <InputText
            isNotRequire
            title={'Place of Work'}
            placeholder={'Name '}
            value={educationInstitution}
            onChangeText={onChangeInstitute}
          />

          <InputText
            isNotRequire
            title={'Position Held'}
            placeholder={'Java Developer '}
            value={specialization}
            onChangeText={onChangeSpecialization}
          />

          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, marginRight: wp(1)}}>
              <Text style={styles.inputTitleText}>{'Start'}</Text>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setIsOpenDatePicker(true)}>
                <View pointerEvents="none">
                  <TextInput
                    editable={false}
                    value={startDate}
                    onPressIn={() => setIsOpenDatePicker(true)}
                    style={styles.inputContainer}
                    placeholder={'mm.yyyy'}
                    placeholderTextColor={colors.placeHolder}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, marginLeft: wp(1)}}>
              <Text style={styles.inputTitleText}>{'End'}</Text>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setEndDatePicker(true)}>
                <View pointerEvents="none">
                  <TextInput
                    editable={false}
                    value={endDate}
                    onPressIn={() => setEndDatePicker(true)}
                    style={styles.inputContainer}
                    placeholder={'mm.yyyy'}
                    placeholderTextColor={colors.placeHolder}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigate('Hobbies')}>
            <Text style={styles.buttonTitle}>{'Next'}</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
      <DateTimePicker
        isVisible={isOpenDatePicker}
        onConfirm={onConfirmStartDate}
        onCancel={() => setIsOpenDatePicker(false)}
        mode={'date'}
      />
      <DateTimePicker
        isVisible={endDatePicker}
        onConfirm={onConfirmEndDate}
        onCancel={() => setEndDatePicker(false)}
        mode={'date'}
      />

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
export default WorkExpierence;
