import {View} from 'react-native';
import React, {useContext} from 'react';
import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
import CustomText from '../../../components/CustomText';
import {
  commaFormat,
  convertInvestedAmountToNaira,
  formatDate,
} from 'utils/helperFunctions';
import {AppContext} from 'context/appContext';
import {AppContextType} from 'utils/types';

const SpacedRow = styled.View<{isLast?: boolean}>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${({isLast}) =>
    isLast ? 'transparent' : Colors.light_grey_2};
`;

const EarningsData = ({data}: any) => {
  const context = useContext<AppContextType>(AppContext);
  const {appData} = context;

  const sellRate = appData?.rates?.sell_rate || 0;

  const earningData = [
    {
      title: 'Total earnings',
      value: `$${commaFormat(
        `${(data?.invested_amount || 0) + (data?.total_returns || 0)}`,
      )}`,
    },
    {
      title: 'Current earnings',
      value: `$${commaFormat(
        `${(data?.invested_amount || 0) + (data?.total_returns || 0)}`,
      )}`,
    },
    {
      title: 'Deposit value',
      value: `$${data?.invested_amount || 0}`,
    },
    {
      title: 'Balance in Naira (*₦505)',
      value: `₦ ${convertInvestedAmountToNaira(
        Number(data?.invested_amount),
        sellRate,
      )}`,
    },
    {
      title: 'Plan created on',
      value: data?.created_at ? formatDate(data?.created_at) : '',
    },
    {
      title: 'Maturity date',
      value: data?.maturity_date ? formatDate(data?.maturity_date) : '',
    },
  ];
  return (
    <View style={{marginTop: 20}}>
      {earningData.map((item, index) => {
        return (
          <SpacedRow key={index} isLast={index === earningData?.length - 1}>
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
