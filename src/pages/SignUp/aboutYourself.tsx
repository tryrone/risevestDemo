import React from 'react';
import SafeAreaWrap from '../../components/SafeAreaWrap';
import CustomText from '../../components/CustomText';
import Colors from '../../constants/Colors';
import TextInput, {
  CalendarInput,
  PhoneNumberInput,
} from '../../components/TextInput';
import Button from '../../components/Button';
import {SIGN_IN, SUCCESS_PAGE} from '../../navigation/constants';
import {ScreenDefaultProps} from '../../navigation/nativationType';
import {Formik} from 'formik';
import {aboutYouSchema} from 'schemas/forms';
import {useSignUpUserMutation} from 'rtk/services/user/userApi';
import {useToast} from 'react-native-toast-notifications';

const AboutYourself = ({navigation, route}: ScreenDefaultProps) => {
  const {data: emailData}: any = route?.params;

  const [registerUser, {isLoading}] = useSignUpUserMutation();
  const toast = useToast();

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        nickName: '',
        phoneNumber: '',
        dateOfBirth: '',
      }}
      validationSchema={aboutYouSchema}
      onSubmit={values => {
        registerUser({
          email_address: emailData.email,
          password: emailData.password,
          first_name: values.firstName,
          last_name: values.lastName,
          username: values.nickName,
          phone_number: values.phoneNumber,
          date_of_birth: values.dateOfBirth,
        })
          .unwrap()
          .then(() => {
            navigation.navigate(SUCCESS_PAGE, {
              title: 'You just created your Rise account',
              body: 'Welcome to Rise, let’s take you home',
              btnText: 'Okay',
              navigateTo: SIGN_IN,
            });
          })
          .catch(err => {
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
            value={values.firstName}
            placeholder="Legal First Name"
            inputType="default"
            name="firstName"
            handleChange={handleChange}
            marginTop={22}
          />
          <TextInput
            value={values.lastName}
            name="lastName"
            handleChange={handleChange}
            placeholder="Legal Last Name"
            inputType="default"
          />

          <TextInput
            value={values.nickName}
            placeholder="Nick name"
            name="nickName"
            handleChange={handleChange}
            inputType="default"
          />

          <PhoneNumberInput
            value={values.phoneNumber}
            name="phoneNumber"
            handleChange={handleChange}
            placeholder="Phone Number"
            inputType="phone-pad"
          />

          <CalendarInput
            value={values.dateOfBirth || 'Choose date'}
            name="dateOfBirth"
            handleChange={(val: string) => {
              handleChange('dateOfBirth')(val);
            }}
            placeholder="Date of Birth"
          />

          <Button
            text="Continue"
            textColor={Colors.white}
            fontWeight="700"
            textSize={15}
            style={{marginTop: 25}}
            bgColor={Colors.primary}
            disabled={!isValid}
            onPress={handleSubmit}
            loading={isLoading}
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
      )}
    </Formik>
  );
};

export default AboutYourself;
