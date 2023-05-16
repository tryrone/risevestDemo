import {View} from 'react-native';
import React from 'react';
import CustomText from '../../../components/CustomText';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import Colors from '../../../constants/Colors';

const PlanName = () => {
  return (
    <View>
      <CustomText fontSize={17} fontWeight="700">
        What are you saving for
      </CustomText>

      <TextInput value="" placeholder="Investments" inputType="default" />

      <Button
        text="Continue"
        textColor={Colors.white}
        fontWeight="700"
        textSize={15}
        style={{marginTop: 25}}
        bgColor={Colors.primary}
        onPress={() => {}}
      />
    </View>
  );
};

export default PlanName;
