import {View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import CustomText from '../../../components/CustomText';
import Colors from '../../../constants/Colors';
import {CreditIcon} from '../../../assets/svgs';

const SpacedRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Row = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

const TransactionItem = () => {
  return (
    <SpacedRow>
      <Row style={{width: '60%'}}>
        <CreditIcon />
        <View style={{marginLeft: 11}}>
          <CustomText
            color={Colors.black_4}
            fontSize={14}
            align="left"
            fontWeight="400">
            Received from Bank Account (BOSUN TONY ADEMOSU)
          </CustomText>
          <CustomText
            color={Colors.grey_1}
            fontSize={13}
            align="left"
            fontWeight="400">
            Jul 6, 2021
          </CustomText>
        </View>
      </Row>

      <CustomText
        color={Colors.black_4}
        fontSize={14}
        align="left"
        fontWeight="400">
        +$320.90
      </CustomText>
    </SpacedRow>
  );
};

const RecentTransactions = () => {
  return (
    <View style={{paddingTop: 20, paddingBottom: 150}}>
      <SpacedRow style={{marginBottom: 14}}>
        <CustomText
          color={Colors.black}
          fontSize={18}
          align="left"
          fontWeight="400">
          Recent transactions
        </CustomText>
        <CustomText
          color={Colors.secondary}
          fontSize={14}
          align="right"
          fontWeight="700">
          View all
        </CustomText>
      </SpacedRow>

      <TransactionItem />
    </View>
  );
};

export default RecentTransactions;
