import {View} from 'react-native';
import React from 'react';
import CustomText from '../../../components/CustomText';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import Colors from '../../../constants/Colors';

const PlanAmount = () => {
  return (
    <View>
      <CustomText fontSize={17} fontWeight="700">
        How much do need?
      </CustomText>

      <TextInput
        showNaira
        value=""
        placeholder="Investments"
        inputType="numeric"
      />

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

export default PlanAmount;
