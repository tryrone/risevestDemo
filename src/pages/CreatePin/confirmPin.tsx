import React from 'react';
import SafeAreaWrap from '../../components/SafeAreaWrap';
import {BackBtnSvg} from '../../assets/svgs';
import {TouchableOpacity} from 'react-native';
import {ScreenDefaultProps} from '../../navigation/nativationType';
import CustomText from '../../components/CustomText';
import Colors from '../../constants/Colors';
import {CodeInput} from '../../components/TextInput';
import {SIGN_IN, SUCCESS_PAGE} from '../../navigation/constants';

const ConfirmPin = ({navigation}: ScreenDefaultProps) => {
  return (
    <SafeAreaWrap style={{paddingHorizontal: 20}}>
      <TouchableOpacity
        style={{marginTop: 16}}
        onPress={() => navigation.goBack()}>
        <BackBtnSvg />
      </TouchableOpacity>

      <CustomText
        fontSize={20}
        fontWeight="400"
        color={Colors.black_2}
        top={10}>
        Confirm 6-digit PIN
      </CustomText>

      <CustomText
        fontSize={15}
        fontWeight="400"
        color={Colors.grey_2}
        style={{lineHeight: '22px'}}
        top={10}>
        You’ll use this PIN to sign in and confirm transactions
      </CustomText>

      <CodeInput
        mt={31}
        keyboardContainerStyle={{
          position: 'absolute',
          bottom: '15%',
          alignSelf: 'center',
        }}
        onComplete={(val: string) => {
          console.log({val});
          navigation.navigate(SUCCESS_PAGE, {
            title: 'You’ve created your PIN',
            body: 'Keep your account safe with your secret PIN. Do not share this PIN with anyone.',
            btnText: 'Okay',
            navigateTo: SIGN_IN,
          });
        }}
      />
    </SafeAreaWrap>
  );
};

export default ConfirmPin;
