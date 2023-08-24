/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import SafeAreaWrap from 'components/SafeAreaWrap';
import {ScreenDefaultProps} from 'navigation/nativationType';
import PageHeader from 'components/PageNavigation';
import {BankItemType} from 'utils/types';
import styled from 'styled-components/native';
import Colors from 'constants/Colors';
import {View} from 'react-native';
import CustomText from 'components/CustomText';
import {ArrowRight} from 'assets/svgs';
import {useGetBanksQuery} from 'rtk/services/user/userApi';

const ItemWrap = styled.TouchableOpacity`
  padding-vertical: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors?.light_grey_2};
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BankItem = ({data, onPress}: BankItemType) => {
  return (
    <ItemWrap onPress={onPress}>
      <Row style={{marginTop: 15}}>
        <View style={{marginLeft: 12}}>
          <CustomText fontSize={15} fontWeight="400" color={Colors.black_3}>
            0123456789 •{' '}
            <CustomText fontSize={15} fontWeight="400" color={Colors.grey_3}>
              GTBank PLC
            </CustomText>
          </CustomText>

          <CustomText
            fontSize={15}
            top={4}
            fontWeight="400"
            color={Colors.black}>
            Bosun Olanrewaju
          </CustomText>
        </View>
      </Row>

      <ArrowRight />
    </ItemWrap>
  );
};

const SelectBank = ({navigation}: ScreenDefaultProps) => {
  const {data} = useGetBanksQuery(
    {},
    {
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
    },
  );

  return (
    <SafeAreaWrap style={{paddingHorizontal: 20}}>
      <PageHeader navigation={navigation} title="Select bank" />

      {data &&
        data?.map(
          (
            item: {
              accountNumber: string;
              bankName: string;
              accountName: string;
              id: string;
            },
            index: number,
          ) => {
            <BankItem
              key={`${item?.id + index}`}
              data={item}
              onPress={() => {}}
            />;
          },
        )}
    </SafeAreaWrap>
  );
};

export default SelectBank;
