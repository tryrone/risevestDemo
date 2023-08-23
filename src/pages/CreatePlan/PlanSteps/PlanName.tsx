import {View} from 'react-native';
import React, {useContext} from 'react';
import CustomText from '../../../components/CustomText';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import Colors from '../../../constants/Colors';
import {CreatePlanContextType, CreatePlanNameComponentType} from 'utils/types';
import {CreatePlanContext} from 'context/createPlanContext';

const PlanName = ({next}: CreatePlanNameComponentType) => {
  const context = useContext<CreatePlanContextType>(CreatePlanContext);
  const {planForm, setPlanForm} = context;
  return (
    <View>
      <CustomText fontSize={17} fontWeight="700">
        What are you saving for
      </CustomText>

      <TextInput
        value={planForm.name}
        placeholder="Investments"
        returnValue
        handleChange={(e: string) => {
          setPlanForm({...planForm, name: e});
        }}
        inputType="default"
      />

      <Button
        text="Continue"
        textColor={Colors.white}
        fontWeight="700"
        textSize={15}
        style={{marginTop: 25}}
        bgColor={Colors.primary}
        disabled={planForm.name === ''}
        onPress={() => {
          next();
        }}
      />
    </View>
  );
};

export default PlanName;
