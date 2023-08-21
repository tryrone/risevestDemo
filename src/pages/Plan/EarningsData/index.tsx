import {View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
import CustomText from '../../../components/CustomText';

const SpacedRow = styled.View<{isLast?: boolean}>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${({isLast}) =>
    isLast ? 'transparent' : Colors.light_grey_2};
`;

const EarningsData = () => {
  const data = [
    {
      title: 'Total earnings',
      value: '$12,000.09',
    },
    {
      title: 'Current earnings',
      value: '$12,000.09',
    },
    {
      title: 'Deposit value',
      value: '$50,543.05',
    },
    {
      title: 'Balance in Naira (*₦505)',
      value: '₦31,918,837.5',
    },
    {
      title: 'Plan created on',
      value: '23rd July, 2019',
    },
    {
      title: 'Maturity date',
      value: '24th July 2022',
    },
  ];
  return (
    <View style={{marginTop: 20}}>
      {data.map((item, index) => {
        return (
          <SpacedRow key={index} isLast={index === data.length - 1}>
            <CustomText
              color={Colors.grey_2}
              fontSize={15}
              align="left"
              fontWeight="400">
              {item.title}
            </CustomText>
            <CustomText
              color={Colors.black_3}
              fontSize={15}
              align="right"
              fontWeight="400">
              {item.value}
            </CustomText>
          </SpacedRow>
        );
      })}
    </View>
  );
};

export default EarningsData;
