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

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {icons} from '../../helpers/iconConstants';
import {colors, fontFamily, fontSize} from '../../helpers/utils';
import {hp, statusBarHeight, wp} from '../../helpers/constants';
import {InputText} from '../../components';

// create a component
const GladToUser = () => {
  const {goBack, navigate} = useNavigation();

  const onPressBack = () => goBack();

  return (
    <View style={styles.container}>
      <Image
        source={icons.authTop}
        resizeMode={'contain'}
        style={styles.topAuthImg}
      />
      <View style={styles.contentContainer}>
        <View>
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
        </View>
        <View style={{paddingTop: hp(4.92), marginHorizontal: wp(5)}}>
          <Text style={{fontSize: 18, fontWeight: '400', lineHeight: hp(3.15)}}>
            {'Glad to see you, friend!'}
          </Text>
          <Text
            style={{
              paddingTop: hp(4),
              fontSize: 18,
              fontWeight: '700',
              paddingLeft: wp(11.5),
            }}>
            {'  SPRY ROCKS '}
            <Text style={{fontWeight: '400', lineHeight: hp(3.15)}}>
              {'   is    a    rapidly'}
            </Text>
          </Text>
          <Text style={{fontSize: 18, fontWeight: '400', lineHeight: hp(3.15)}}>
            {
              'developing      European       company \nwith        headquater      at       kharkiv,\nUkraine.'
            }
          </Text>
          <Text style={{fontSize: 18, fontWeight: '400', lineHeight: hp(3.15)}}>
            {
              "\tOur  company  was  founded   in \n2014 and  although  we  are  a  young \nteam  we  have   a   lot  of  successful \nprojects  and  satisfied  customers. \n \t In   work   with   every  particular \ncustomer,  the  main  philosophy is to\nestablish and keep good relations. \n\tWe  develop  innovative solutions\nthat    not    only    contribute   to   the\nsuccess       of       our        customer's\nbusinesses   but   also   give   them  a\ncompetitive   market   advantage.\n\t  Because  your   success   is   our success too!"
            }
          </Text>
        </View>
      </View>
      <Image
        source={icons.spryText}
        resizeMode={'contain'}
        style={styles.spryTextImg}
      />
    </View>
  );
};

// Glad to see you, friend!

//    SPRY ROCKS is a rapidly developing European company with headquarter at Kharkiv, Ukraine.
//     Our company was founded in 2014 and although we are a young team we have a lot of successful projects and satisfied customers.
//     In work with every particular customer, the main philosophy is to establish and keep good relations.
//     We develop innovative solutions that not only contribute to the success of our customer's businesses but also give them a competitive market advantage.
//      Because your success is our success too!

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
export default GladToUser;
