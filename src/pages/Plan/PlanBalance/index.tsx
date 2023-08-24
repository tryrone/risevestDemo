import {View} from 'react-native';
import React, {useContext} from 'react';
import CustomText from '../../../components/CustomText';
import Colors from '../../../constants/Colors';
import {PlusIcon, QuestionInfoIcon} from '../../../assets/svgs';
import styled from 'styled-components/native';
import Button from '../../../components/Button';
import {commaFormat, convertInvestedAmountToNaira} from 'utils/helperFunctions';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {AppContextType, ProgressBarType} from 'utils/types';
import {AppContext} from 'context/appContext';
import {FUND_PLAN} from 'navigation/constants';

const SpacedRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 26px;
`;

const ProgressWrap = styled.View`
  width: 100%;
  height: 10px;
  border-radius: 100px;
  background-color: ${Colors.light_grey};
  position: relative;
  margin-top: 15px;
`;

const ProgressFill = styled(Animated.View)`
  height: 100%;
  border-radius: 10px;
  background-color: ${Colors.primary};
`;

const InfoWrap = styled.View`
  padding: 5px 15px;
  border-radius: 20px;
  background-color: ${Colors.light_grey_2};
  justify-self: center;
  align-self: center;
  margin-top: 25px;
`;

const Progress = ({percentage}: ProgressBarType) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(`${percentage}%`, {duration: 500}),
    };
  });
  return (
    <ProgressWrap>
      <ProgressFill style={animatedStyle} />
    </ProgressWrap>
  );
};

const PlanBalance = ({data, navigation}: any) => {
  const percentage =
    (data?.invested_amount || 0 / data?.target_amount || 0) * 100;

  const context = useContext<AppContextType>(AppContext);
  const {appData} = context;

  const sellRate = appData?.rates?.sell_rate || 0;

  return (
    <View
      style={{
        marginTop: 15,
      }}>
      <CustomText
        color={Colors.grey_1}
        fontSize={15}
        align="center"
        fontWeight="400">
        Plan Balance
      </CustomText>
      <CustomText
        color={Colors.black_3}
        fontSize={24}
        align="center"
        fontWeight="700">
        ${commaFormat(`${data?.invested_amount}` || '0')}
      </CustomText>
      <CustomText
        color={Colors.grey_1}
        fontSize={15}
        align="center"
        fontWeight="400">
        ~ ₦
        {convertInvestedAmountToNaira(Number(data?.invested_amount), sellRate)}
        <QuestionInfoIcon />
      </CustomText>

      <CustomText
        color={Colors.black_3}
        top={6}
        fontSize={15}
        align="center"
        fontWeight="400">
        Gains
      </CustomText>
      <CustomText
        color={Colors.green}
        top={6}
        fontSize={16}
        align="center"
        fontWeight="400">
        +${commaFormat(`${data?.total_returns}` || '0')} • 0.0%
      </CustomText>

      <SpacedRow>
        <CustomText
          color={Colors.grey_2}
          fontSize={15}
          align="center"
          fontWeight="400">
          {Math.round(percentage).toFixed(2)} achieved
        </CustomText>
        <CustomText
          color={Colors.grey_2}
          fontSize={15}
          align="center"
          fontWeight="400">
          Target: ${commaFormat(`${data?.target_amount}` || '0')}
        </CustomText>
      </SpacedRow>
      <Progress percentage={percentage} />

      <InfoWrap>
        <CustomText
          color={Colors.grey_2}
          fontSize={13}
          align="center"
          fontWeight="400">
          Results are updated monthly
        </CustomText>
      </InfoWrap>

      <Button
        text="Fund plan"
        bgColor={Colors.light_grey_2}
        borderRadius="5px"
        textColor={Colors.primary}
        textSize={15}
        fontWeight="700"
        height="56px"
        icon={
          <PlusIcon style={{position: 'relative', top: -2, marginRight: 5}} />
        }
        style={{
          marginTop: 24,
        }}
        onPress={() => navigation?.navigate(FUND_PLAN)}
      />
    </View>
  );
};

export default PlanBalance;
