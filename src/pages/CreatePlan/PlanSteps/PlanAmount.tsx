import {View} from 'react-native';
import React, {useContext} from 'react';
import CustomText from '../../../components/CustomText';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import Colors from '../../../constants/Colors';
import {CreatePlanContextType, PlanAmountComponentType} from 'utils/types';
import {CreatePlanContext} from 'context/createPlanContext';
import {commaFormat} from 'utils/helperFunctions';

const PlanAmount = ({next}: PlanAmountComponentType) => {
  const context = useContext<CreatePlanContextType>(CreatePlanContext);
  const {planForm, setPlanForm} = context;
  return (
    <View>
      <CustomText fontSize={17} fontWeight="700">
        How much do need?
      </CustomText>

      <TextInput
        returnValue
        showNaira
        value={planForm.amount}
        handleChange={(e: string) => {
          setPlanForm({...planForm, amount: commaFormat(e)});
        }}
        placeholder="Amount"
        inputType="numeric"
      />

      <Button
        text="Continue"
        textColor={Colors.white}
        fontWeight="700"
        textSize={15}
        style={{marginTop: 25}}
        bgColor={Colors.primary}
        disabled={planForm.amount === ''}
        onPress={() => {
          next();
        }}
      />
    </View>
  );
};

export default PlanAmount;
