import React from 'react';
import SafeAreaWrap from '../../components/SafeAreaWrap';
import CustomText from '../../components/CustomText';
import Colors from '../../constants/Colors';
import TextInput, {
  CalendarInput,
  PhoneNumberInput,
} from '../../components/TextInput';
import Button from '../../components/Button';
import {CREATE_PIN, SUCCESS_PAGE} from '../../navigation/constants';
import {ScreenDefaultProps} from '../../navigation/nativationType';

const AboutYourself = ({navigation}: ScreenDefaultProps) => {
  return (
    <SafeAreaWrap style={{paddingHorizontal: 20}}>
      <CustomText
        fontSize={20}
        fontWeight="500"
        color={Colors.black_2}
        top={20}>
        Tell Us More About You
      </CustomText>

      <CustomText
        fontSize={14}
        fontWeight="400"
        color={Colors.grey_2}
        style={{lineHeight: '22px'}}
        top={17}>
        Please use your name as it appears on your ID.
      </CustomText>

      <TextInput
        value=""
        placeholder="Legal First Name"
        inputType="default"
        marginTop={22}
      />
      <TextInput value="" placeholder="Legal Last Name" inputType="default" />

      <TextInput value="" placeholder="Nick name" inputType="default" />

      <PhoneNumberInput
        value=""
        placeholder="Phone Number"
        inputType="phone-pad"
      />

      <CalendarInput
        value="Choose date"
        onPress={() => {}}
        placeholder="Date of Birth"
      />

      <Button
        text="Continue"
        textColor={Colors.white}
        fontWeight="700"
        textSize={15}
        style={{marginTop: 25}}
        bgColor={Colors.primary}
        onPress={() =>
          navigation.navigate(SUCCESS_PAGE, {
            title: 'You just created your Rise account',
            body: 'Welcome to Rise, let’s take you home',
            btnText: 'Okay',
            navigateTo: CREATE_PIN,
          })
        }
      />

      <CustomText
        fontSize={12}
        fontWeight="400"
        color={Colors.black_3}
        align="center"
        style={{lineHeight: '16px', width: '65%', alignSelf: 'center'}}
        top={10}>
        By clicking Continue, you agree to our{' '}
        <CustomText fontSize={12} fontWeight="400" color={Colors.primary}>
          Terms of Service
        </CustomText>{' '}
        and
        <CustomText fontSize={12} fontWeight="400" color={Colors.primary}>
          {' '}
          Privacy Policy.
        </CustomText>
      </CustomText>
    </SafeAreaWrap>
  );
};

export default AboutYourself;
