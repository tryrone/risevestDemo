import {
  BankIcon,
  CardIcon,
  CloseIcon,
  CryptoIcon,
  DebitSvg,
  UsdIcon,
} from 'assets/svgs';
import BottomSheet from 'components/BottomSheet';
import Button from 'components/Button';
import CustomText from 'components/CustomText';
import PageHeader from 'components/PageNavigation';
import SafeAreaWrap from 'components/SafeAreaWrap';
import Colors from 'constants/Colors';
import {SELECT_BANK} from 'navigation/constants';
import {ScreenDefaultProps} from 'navigation/nativationType';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {FundPlanType} from 'utils/types';

const ItemWrap = styled.TouchableOpacity<{isLast: boolean}>`
  padding-vertical: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({isLast}) =>
    isLast ? Colors.white : Colors?.light_grey_2};
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SpacedRow = styled.View<{pb?: number; showBb?: boolean; mt?: number}>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${({pb}) => pb || 0}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({showBb}) =>
    showBb ? Colors?.light_grey_2 : Colors?.white};
  margin-top: ${({mt}) => mt || 0}px;
`;

const FundItem = ({data, isLast, onPress}: FundPlanType) => {
  return (
    <ItemWrap isLast={isLast} onPress={onPress}>
      <Row>
        {data?.icon}

        <View style={{marginLeft: 12}}>
          <CustomText fontSize={15} fontWeight="400" color={Colors.black_3}>
            {data?.title}
          </CustomText>
          <CustomText
            fontSize={13}
            top={4}
            fontWeight="400"
            color={Colors.grey_2}>
            {data.timeline}
          </CustomText>
        </View>
      </Row>

      <View>
        <CustomText
          fontSize={13}
          fontWeight="400"
          align="right"
          color={Colors.grey_2}>
          {data?.rate}
        </CustomText>
        <CustomText
          fontSize={13}
          top={4}
          fontWeight="400"
          align="right"
          color={Colors.grey_2}>
          {data?.fee}
        </CustomText>
      </View>
    </ItemWrap>
  );
};

const FundPlan = ({navigation}: ScreenDefaultProps) => {
  const [openModal, setOpenModal] = useState(false);
  const fundTypes = [
    {
      icon: <BankIcon />,
      title: 'Naira Bank Transfer',
      timeline: 'Timeline - 15 mins',
      rate: 'Rate - $1 = ₦490',
      fee: 'Fee - 1.5%',
    },
    {
      icon: <CardIcon />,
      title: 'Naira Debit card',
      timeline: 'Timeline - 15 mins',
      rate: 'Rate - $1 = ₦490',
      fee: 'Fee - 1.5%',
    },
    {
      icon: <DebitSvg />,
      title: 'Naira Direct Debit',
      timeline: 'Timeline - 15 mins',
      rate: 'Rate - $1 = ₦490',
      fee: '',
    },
    {
      icon: <UsdIcon />,
      title: 'USD Debit/Credit Card',
      timeline: 'Timeline - 15 mins',
      rate: '',
      fee: 'Fee - 0.5%',
    },
    {
      icon: <CryptoIcon />,
      title: 'Crypto',
      timeline: 'Timeline - 15 mins',
      rate: '',
      fee: 'Fee - 0.1%',
    },
  ];
  return (
    <SafeAreaWrap style={{paddingHorizontal: 20}}>
      <PageHeader navigation={navigation} title="Fund plan" />
      <View style={{marginTop: 15}}>
        {fundTypes?.map((item, index) => {
          return (
            <FundItem
              key={index}
              data={item}
              isLast={index === fundTypes.length - 1}
              onPress={() => {
                setOpenModal(true);
              }}
            />
          );
        })}
      </View>

      <BottomSheet isOpen={openModal} close={() => setOpenModal(false)}>
        <View>
          <SpacedRow pb={24} showBb>
            <TouchableOpacity onPress={() => setOpenModal(false)}>
              <CloseIcon />
            </TouchableOpacity>
            <CustomText
              fontSize={20}
              fontWeight="400"
              align="center"
              color={Colors.black_3}>
              About Exchange Rates
            </CustomText>

            <View style={{width: 20}} />
          </SpacedRow>

          <SpacedRow mt={15} showBb pb={18}>
            <View>
              <CustomText fontSize={15} fontWeight="400" color={Colors.black_3}>
                USD Buy Rate
              </CustomText>
              <CustomText
                fontSize={13}
                top={4}
                fontWeight="400"
                color={Colors.grey_2}>
                We buy US dollars at this rate
              </CustomText>
            </View>

            <View>
              <CustomText
                fontSize={15}
                fontWeight="400"
                align="right"
                color={Colors.black_3}>
                ₦490
              </CustomText>
            </View>
          </SpacedRow>

          <SpacedRow mt={15} showBb pb={18}>
            <View>
              <CustomText fontSize={15} fontWeight="400" color={Colors.black_3}>
                USD Sell Rate
              </CustomText>
              <CustomText
                fontSize={13}
                top={4}
                fontWeight="400"
                color={Colors.grey_2}>
                The current value of your investments in Naira
              </CustomText>
            </View>

            <View>
              <CustomText
                fontSize={15}
                fontWeight="400"
                align="right"
                color={Colors.black_3}>
                ₦490
              </CustomText>
            </View>
          </SpacedRow>

          <CustomText
            fontSize={11}
            top={14}
            style={{lineHeight: '16px'}}
            bottom={24}
            fontWeight="400"
            align="center"
            color={Colors.grey_3}>
            These exhange rates are provided by independent third parties who
            handle fund conversions at the prevailing parallel rates and are not
            set, or controlled or by Rise. They are subject to change based on
            market trends.
          </CustomText>

          <Button
            text="Accept & Continue"
            textColor={Colors.white}
            fontWeight="700"
            textSize={15}
            height="52px"
            style={{marginBottom: 25, marginTop: 15}}
            bgColor={Colors.primary}
            onPress={() => {
              setOpenModal(false);
              navigation.navigate(SELECT_BANK);
            }}
          />
        </View>
      </BottomSheet>
    </SafeAreaWrap>
  );
};

export default FundPlan;
