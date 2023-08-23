import React from 'react';
import SafeAreaWrap from '../../components/SafeAreaWrap';
import PageHeader from '../../components/PageNavigation';
import {ScreenDefaultProps} from '../../navigation/nativationType';
import CustomText from '../../components/CustomText';
import Colors from '../../constants/Colors';
import styled from 'styled-components/native';
import {View} from 'react-native';
import {WhiteArrowRightSvg} from '../../assets/svgs';
import {PLAN_DETAIL} from '../../navigation/constants';
import {PlanItemType} from 'utils/types';
import {useGetUserPlansQuery} from 'rtk/services/user/userApi';

interface PlanItemProps {
  title?: string;
  amount?: string | number;
  bgColor: string;
  onPress: () => void;
}

const PlanItemWrap = styled.TouchableOpacity<{bgColor: string}>`
  width: 48%;
  height: 208px;
  border-radius: 15px;
  padding: 13px;
  background-color: ${props => props.bgColor || Colors.white};
  position: relative;
  margin-bottom: 13px;
`;

const FloatingView = styled.View`
  position: absolute;
  bottom: 13px;
  align-self: center;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RowWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

export const PlanItem = ({title, bgColor, amount, onPress}: PlanItemProps) => {
  return (
    <PlanItemWrap bgColor={bgColor} onPress={onPress}>
      <FloatingView>
        <View>
          <CustomText
            fontSize={15}
            align="left"
            fontWeight="400"
            color={Colors.white}>
            {title}
          </CustomText>
          <CustomText
            fontSize={18}
            align="left"
            fontWeight="400"
            color={Colors.white}>
            ${amount}
          </CustomText>
        </View>
        <WhiteArrowRightSvg />
      </FloatingView>
    </PlanItemWrap>
  );
};

const PlansList = ({navigation, route}: ScreenDefaultProps) => {
  const {data} = useGetUserPlansQuery(
    {},
    {
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
    },
  );

  const plansData = data?.items || route?.params?.plans;

  const colors = [
    Colors.orange_2,
    Colors.dark_teal,
    Colors.black_4,
    Colors.orange,
    Colors.pink,
  ];

  const plans = plansData?.map((plan: PlanItemType, index: number) => ({
    title: plan.plan_name,
    amount: plan.target_amount,
    bgColor: colors[index % colors?.length],
    ...plan,
  }));

  return (
    <SafeAreaWrap style={{paddingHorizontal: 20}}>
      <PageHeader navigation={navigation} title="Choose from plans" />
      <CustomText
        top={2}
        fontSize={15}
        bottom={24}
        align="center"
        fontWeight="400"
        color={Colors.grey_2}>
        Tap on any of the plans to select
      </CustomText>
      <RowWrap>
        {plans.map((plan: any, index: number) => (
          <PlanItem
            key={index}
            {...plan}
            onPress={() => {
              navigation.navigate(PLAN_DETAIL, {plan});
            }}
          />
        ))}
      </RowWrap>
    </SafeAreaWrap>
  );
};

export default PlansList;
