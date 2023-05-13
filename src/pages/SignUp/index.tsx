import React from 'react';
import SafeAreaWrap from '../../components/SafeAreaWrap';
import CustomText from '../../components/CustomText';
import Colors from '../../constants/Colors';
import TextInput, {Password} from '../../components/TextInput';
import styled from 'styled-components/native';
import {CheckIcon, InactiveCheckIcon} from '../../assets/svgs';
import Button from '../../components/Button';
import {ScreenDefaultProps} from '../../navigation/nativationType';
import {ABOUT_YOURSELF} from '../../navigation/constants';

type RadioProps = {
  active: boolean;
  text: string;
  mt?: number;
  onClick?: (val: any) => void | undefined;
};

const RadioRow = styled.Pressable<{mt?: number}>`
  flex-direction: row;
  align-items: center;
  margin-top: ${({mt}) => mt || 0}px;
`;

const Radio = ({active, text, onClick, mt}: RadioProps) => {
  return (
    <RadioRow mt={mt} onPress={onClick}>
      {active ? <CheckIcon /> : <InactiveCheckIcon />}

      <CustomText
        fontSize={13}
        fontWeight="400"
        color={Colors.black_2}
        left={8}>
        {text}
      </CustomText>
    </RadioRow>
  );
};

const SignUp = ({navigation}: ScreenDefaultProps) => {
  return (
    <SafeAreaWrap style={{paddingHorizontal: 20}}>
      <CustomText
        fontSize={20}
        fontWeight="500"
        color={Colors.black_2}
        top={20}>
        Create Account
      </CustomText>

      <CustomText
        fontSize={14}
        fontWeight="400"
        color={Colors.grey_2}
        style={{width: '80%', lineHeight: '22px'}}
        top={27}>
        Start building your dollar-denominated investment portfolio
      </CustomText>

      <TextInput
        value=""
        placeholder="Email Address"
        inputType="email-address"
        marginTop={52}
      />

      <Password value="" placeholder="Password" />

      <Radio text="Minimum of 8 characters" active={false} mt={25} />
      <Radio text="One UPPERCASE character" active={false} mt={12} />
      <Radio
        text="One unique character (e.g: !@#$%^&*?)"
        active={false}
        mt={12}
      />

      <Button
        text="Sign Up"
        textColor={Colors.white}
        fontWeight="700"
        textSize={15}
        style={{marginTop: 25}}
        bgColor={Colors.primary}
        onPress={() => navigation.navigate(ABOUT_YOURSELF)}
      />
    </SafeAreaWrap>
  );
};

export default SignUp;
