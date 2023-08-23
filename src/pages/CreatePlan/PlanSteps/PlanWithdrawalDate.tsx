import {View} from 'react-native';
import React, {useContext} from 'react';
import CustomText from '../../../components/CustomText';
import {CalendarInput} from '../../../components/TextInput';
import Button from '../../../components/Button';
import Colors from '../../../constants/Colors';
import {ScreenDefaultProps} from '../../../navigation/nativationType';
import {PLAN_REVIEW} from '../../../navigation/constants';
import {CreatePlanContextType} from 'utils/types';
import {CreatePlanContext} from 'context/createPlanContext';
import {useCreatePlanMutation} from 'rtk/services/user/userApi';
import {removeCommaFormat} from 'utils/helperFunctions';
import {useToast} from 'react-native-toast-notifications';

const PlanWithdrawalDate = ({navigation}: ScreenDefaultProps) => {
  const toast = useToast();
  const context = useContext<CreatePlanContextType>(CreatePlanContext);
  const {planForm, setPlanForm} = context;

  const [createPlan, {isLoading}] = useCreatePlanMutation();

  const onSubmit = async () => {
    createPlan({
      plan_name: planForm.name,
      target_amount: removeCommaFormat(planForm.amount),
      maturity_date: planForm.date,
    })
      .unwrap()
      .then(res => {
        navigation.navigate(PLAN_REVIEW, {
          params: {
            data: res,
          },
        });
      })
      .catch((err: any) => {
        console.log(err);
        toast.show(
          err?.data?.message || 'Something went wrong, please try again',
          {
            type: 'danger',
          },
        );
      });
  };

  return (
    <View>
      <CustomText fontSize={17} fontWeight="700">
        When do you want to withdraw?
      </CustomText>

      <CalendarInput
        value={planForm.date || new Date().toDateString()}
        placeholder="Choose a date"
        name="date"
        handleChange={(val: string) => {
          setPlanForm({...planForm, date: val});
        }}
      />

      <Button
        text="Continue"
        textColor={Colors.white}
        fontWeight="700"
        textSize={15}
        style={{marginTop: 25}}
        bgColor={Colors.primary}
        disabled={planForm.date === '' || isLoading}
        loading={isLoading}
        onPress={onSubmit}
      />
    </View>
  );
};

export default PlanWithdrawalDate;
