import React from 'react';
import SafeAreaWrap from '../../components/SafeAreaWrap';
import CustomText from '../../components/CustomText';
import Colors from '../../constants/Colors';
import TextInput, {Password} from '../../components/TextInput';
import Button from '../../components/Button';
import {Platform, TouchableOpacity} from 'react-native';
import {ScreenDefaultProps} from '../../navigation/nativationType';
import {BOTTOM_NAV, SIGN_UP} from '../../navigation/constants';
import {Formik} from 'formik';
import {createAccountSchema} from 'schemas/forms';
import {useLoginMutation} from 'rtk/services/auth/authApi';
import {useToast} from 'react-native-toast-notifications';
import {storeBearerToken} from 'utils/localStorage';

const SignIn = ({navigation}: ScreenDefaultProps) => {
  const toast = useToast();
  const [loginUser, {isLoading}] = useLoginMutation();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={createAccountSchema}
      onSubmit={values => {
        loginUser({
          email_address: values.email,
          password: values.password,
        })
          .unwrap()
          .then((res: any) => {
            storeBearerToken(res.token);
            navigation.navigate(BOTTOM_NAV, {
              screen: 'Home',
              params: {
                data: res,
              },
            });
          })
          .catch((err: any) => {
            console.log('err', err);
            toast.show(
              err?.data?.message || 'Something went wrong, please try again',
              {
                type: 'danger',
              },
            );
          });
      }}>
      {({values, handleChange, isValid, handleSubmit}) => (
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
            Let’s get you logged in to get back to building your
            dollar-denominated investment portfolio.
          </CustomText>

          <TextInput
            value={values.email}
            name="email"
            handleChange={handleChange}
            placeholder="Email Address"
            inputType="email-address"
            marginTop={52}
          />

          <Password
            value={values.password}
            placeholder="Password"
            name="password"
            handleChange={handleChange}
          />

          <Button
            text="Sign In"
            textColor={Colors.white}
            fontWeight="700"
            textSize={15}
            style={{marginTop: 25}}
            bgColor={Colors.primary}
            disabled={!isValid || isLoading}
            loading={isLoading}
            onPress={handleSubmit}
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
              bottom: Platform.OS === 'android' ? 50 : 30,
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
      )}
    </Formik>
  );
};

export default SignIn;
