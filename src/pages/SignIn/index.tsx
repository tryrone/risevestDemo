import React from 'react';
import SafeAreaWrap from '../../components/SafeAreaWrap';
import CustomText from '../../components/CustomText';
import Colors from '../../constants/Colors';
import TextInput, {Password} from '../../components/TextInput';
import Button from '../../components/Button';
import {TouchableOpacity} from 'react-native';
import {ScreenDefaultProps} from '../../navigation/nativationType';
import {BOTTOM_NAV, SIGN_UP} from '../../navigation/constants';

const SignIn = ({navigation}: ScreenDefaultProps) => {
  return (
    <SafeAreaWrap style={{paddingHorizontal: 20}}>
      <CustomText
        fontSize={20}
        fontWeight="500"
        color={Colors.black_2}
        top={20}>
        Welcome back
      </CustomText>

      <CustomText
        fontSize={14}
        fontWeight="400"
        color={Colors.grey_2}
        style={{lineHeight: '22px'}}
        top={27}>
        Let’s get you logged in to get back to building your dollar-denominated
        investment portfolio.
      </CustomText>

      <TextInput
        value=""
        placeholder="Email Address"
        inputType="email-address"
        marginTop={52}
      />

      <Password value="" placeholder="Password" />

      <Button
        text="Sign In"
        textColor={Colors.white}
        fontWeight="700"
        textSize={15}
        style={{marginTop: 25}}
        bgColor={Colors.primary}
        onPress={() => navigation.navigate(BOTTOM_NAV)}
      />
      <Button
        text="I forgot my password"
        textColor={Colors.primary}
        fontWeight="700"
        textSize={15}
        style={{marginTop: 10}}
        bgColor={Colors.white}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate(SIGN_UP)}
        style={{
          position: 'absolute',
          alignSelf: 'center',
          bottom: 30,
        }}>
        <CustomText
          fontSize={15}
          fontWeight="700"
          align="center"
          color={Colors.grey_2}
          style={{lineHeight: '22px'}}
          top={27}>
          Don't have an account?{' '}
          <CustomText fontSize={15} fontWeight="700" color={Colors.primary}>
            Sign up
          </CustomText>
        </CustomText>
      </TouchableOpacity>
    </SafeAreaWrap>
  );
};

export default SignIn;
