import React from 'react';
import SafeAreaWrap from '../../../components/SafeAreaWrap';
import PageHeader from '../../../components/PageNavigation';
import {ScreenDefaultProps} from '../../../navigation/nativationType';
import CustomText from '../../../components/CustomText';
import Colors from '../../../constants/Colors';
import styled from 'styled-components/native';
// import PlanName from './PlanName';
// import PlanAmount from './PlanAmount';
import PlanWithdrawalDate from './PlanWithdrawalDate';

const ProgressWrap = styled.View`
  width: 100%;
  height: 10px;
  border-radius: 10px;
  background-color: ${Colors.grey};
  margin-top: 35px;
  position: relative;
  margin-bottom: 60px;
`;

const Progress = styled.View<{percent: number}>`
  height: 100%;
  width: ${({percent}) => percent}%;
  border-radius: 10px;
  background-color: ${Colors.primary};
`;

const ProgressBar = () => {
  return (
    <ProgressWrap>
      <Progress percent={33} />
    </ProgressWrap>
  );
};

const PlanSteps = ({navigation}: ScreenDefaultProps) => {
  return (
    <SafeAreaWrap style={{paddingHorizontal: 20}}>
      <PageHeader navigation={navigation} title="Goal name" />

      <CustomText fontSize={15} fontWeight="400" top={17} color={Colors.grey_2}>
        Question 1 of 3
      </CustomText>

      <ProgressBar />

      {/* <PlanName /> */}
      {/* <PlanAmount /> */}
      <PlanWithdrawalDate navigation={navigation} />
    </SafeAreaWrap>
  );
};

export default PlanSteps;
