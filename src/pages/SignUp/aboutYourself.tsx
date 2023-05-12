import React from 'react';
import SafeAreaWrap from '../../components/SafeAreaWrap';
import CustomText from '../../components/CustomText';
import Colors from '../../constants/Colors';
import TextInput from '../../components/TextInput';

const AboutYourself = () => {
  return (
    <SafeAreaWrap style={{paddingHorizontal: 20}}>
      <CustomText
        fontSize={20}
        fontWeight="500"
        color={Colors.black_2}
        top={40}>
        Tell Us More About You
      </CustomText>

      <CustomText
        fontSize={14}
        fontWeight="400"
        color={Colors.grey_2}
        style={{lineHeight: '22px'}}
        top={27}>
        Please use your name as it appears on your ID.
      </CustomText>

      <TextInput
        value=""
        placeholder="Legal First Name"
        inputType="default"
        marginTop={52}
      />
      <TextInput value="" placeholder="Legal Last Name" inputType="default" />

      <TextInput value="" placeholder="Nick name" inputType="default" />
    </SafeAreaWrap>
  );
};

export default AboutYourself;
