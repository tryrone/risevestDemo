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
import {Formik} from 'formik';
import {createAccountSchema} from 'schemas/forms';
import {checkIfPasswordFullFillsConfition} from 'utils/helperFunctions';
import {PasswordContitions} from 'utils/types';

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
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={createAccountSchema}
      onSubmit={values => {
        navigation.navigate(ABOUT_YOURSELF, {data: values});
      }}>
      {({values, handleChange, isValid, handleSubmit}) => (
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
            value={values.email}
            placeholder="Email Address"
            inputType="email-address"
            marginTop={52}
            name="email"
            handleChange={handleChange}
          />

          <Password
            value={values.password}
            placeholder="Password"
            handleChange={handleChange}
            name="password"
          />

          <Radio
            text="Minimum of 8 characters"
            active={checkIfPasswordFullFillsConfition(
              values.password,
              PasswordContitions.HAS_AT_LEAST_EIGHT_CHARACTERS,
            )}
            mt={25}
          />
          <Radio
            text="One UPPERCASE character"
            active={checkIfPasswordFullFillsConfition(
              values.password,
              PasswordContitions.HAS_AT_LEAST_ONE_UPPERCASE_LETTER,
            )}
            mt={12}
          />
          <Radio
            text="One unique character (e.g: !@#$%^&*?)"
            active={checkIfPasswordFullFillsConfition(
              values.password,
              PasswordContitions.HAS_ONE_UNIQUE_CHARACTER,
            )}
            mt={12}
          />

          <Button
            text="Sign Up"
            textColor={Colors.white}
            fontWeight="700"
            textSize={15}
            style={{marginTop: 25}}
            bgColor={Colors.primary}
            disabled={
              !checkIfPasswordFullFillsConfition(
                values.password,
                PasswordContitions.HAS_AT_LEAST_EIGHT_CHARACTERS,
              ) ||
              !checkIfPasswordFullFillsConfition(
                values.password,
                PasswordContitions.HAS_AT_LEAST_ONE_UPPERCASE_LETTER,
              ) ||
              !checkIfPasswordFullFillsConfition(
                values.password,
                PasswordContitions.HAS_ONE_UNIQUE_CHARACTER,
              ) ||
              !isValid
            }
            onPress={handleSubmit}
          />
        </SafeAreaWrap>
      )}
    </Formik>
  );
};

export default SignUp;
