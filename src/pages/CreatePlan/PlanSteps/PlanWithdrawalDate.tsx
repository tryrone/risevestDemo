import {View} from 'react-native';
import React from 'react';
import CustomText from '../../../components/CustomText';
import {CalendarInput} from '../../../components/TextInput';
import Button from '../../../components/Button';
import Colors from '../../../constants/Colors';
import {ScreenDefaultProps} from '../../../navigation/nativationType';
import {PLAN_REVIEW} from '../../../navigation/constants';

const PlanWithdrawalDate = ({navigation}: ScreenDefaultProps) => {
  const [date, setDate] = React.useState('Choose a date');
  return (
    <View>
      <CustomText fontSize={17} fontWeight="700">
        When do you want to withdraw?
      </CustomText>

      <CalendarInput
        value={date}
        placeholder=""
        handleChange={(name: any, val: React.SetStateAction<string>) =>
          setDate(val)
        }
      />

      <Button
        text="Continue"
        textColor={Colors.white}
        fontWeight="700"
        textSize={15}
        style={{marginTop: 25}}
        bgColor={Colors.primary}
        onPress={() => {
          navigation.navigate(PLAN_REVIEW);
        }}
      />
    </View>
  );
};

export default PlanWithdrawalDate;
