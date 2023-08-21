import {View} from 'react-native';
import React from 'react';
import CustomText from '../../../components/CustomText';
import Colors from '../../../constants/Colors';
import {PlusIcon, QuestionInfoIcon} from '../../../assets/svgs';
import styled from 'styled-components/native';
import Button from '../../../components/Button';

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

const ProgressFill = styled.View<{percent: number}>`
  width: ${props => props.percent || 0}%;
  height: 100%;
  border-radius: 100px;
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

const Progress = () => {
  return (
    <ProgressWrap>
      <ProgressFill percent={5} />
    </ProgressWrap>
  );
};

const PlanBalance = () => {
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
        $0.00
      </CustomText>
      <CustomText
        color={Colors.grey_1}
        fontSize={15}
        align="center"
        fontWeight="400">
        ~ ₦0.00 <QuestionInfoIcon />
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
        +$5,000.43 • +12.4%
      </CustomText>

      <SpacedRow>
        <CustomText
          color={Colors.grey_2}
          fontSize={15}
          align="center"
          fontWeight="400">
          0.01 achieved
        </CustomText>
        <CustomText
          color={Colors.grey_2}
          fontSize={15}
          align="center"
          fontWeight="400">
          Target: $20,053.90
        </CustomText>
      </SpacedRow>
      <Progress />

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
      />
    </View>
  );
};

export default PlanBalance;
