import {ScrollView, View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import CustomText from '../../../../components/CustomText';
import Colors from '../../../../constants/Colors';
import {ChevRightIcon, PlusBtnIcon, WhiteArrowRightSvg} from 'assets/svgs';
import {
  CREATE_A_PLAN,
  PLANS_LIST,
  PLAN_DETAIL,
} from '../../../../navigation/constants';
import {ScreenDefaultProps} from '../../../../navigation/nativationType';
import {useGetUserPlansQuery} from 'rtk/services/user/userApi';
import {PlanItemType} from 'utils/types';
import {formatCurrency} from 'utils/helperFunctions';

interface CreatePlanBoxProps {
  onPress: () => void;
}

interface PlanItemProps {
  title?: string;
  amount?: string | number;
  bgColor: string;
  onPress: () => void;
}

const SpacedRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 31px;
`;

const Row = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const CreatePlanWrap = styled.TouchableOpacity`
  width: 188px;
  height: 243px;
  border-radius: 12px;
  background-color: ${Colors.light_grey_2};
  justify-content: center;
  align-items: center;
`;

const PlanItemWrap = styled.TouchableOpacity<{bgColor: string}>`
  width: 188px;
  height: 243px;
  border-radius: 15px;
  padding: 13px;
  background-color: ${props => props.bgColor || Colors.white};
  position: relative;
  margin-left: 13px;
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

const PlanItem = ({title, bgColor, amount, onPress}: PlanItemProps) => {
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
            {formatCurrency(amount)}
          </CustomText>
        </View>
        <WhiteArrowRightSvg />
      </FloatingView>
    </PlanItemWrap>
  );
};

const CreatePlanBox = ({onPress}: CreatePlanBoxProps): JSX.Element => {
  return (
    <CreatePlanWrap onPress={onPress}>
      <PlusBtnIcon />
      <CustomText
        color={Colors.black}
        style={{width: '70%'}}
        align="center"
        fontSize={14}
        fontWeight="700"
        top={5}>
        Create an investment plan
      </CustomText>
    </CreatePlanWrap>
  );
};

const CreatePlan = ({navigation}: ScreenDefaultProps) => {
  const {data} = useGetUserPlansQuery(
    {},
    {
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
    },
  );

  const plans = data?.items?.slice(0, 5)?.reverse() || [];

  const colors = [
    Colors?.orange_2,
    Colors?.teal,
    Colors?.orange,
    Colors?.primary,
    Colors?.dark_teal,
  ];

  return (
    <View>
      <SpacedRow>
        <CustomText color={Colors.black} fontSize={18} fontWeight="400">
          Create a plan
        </CustomText>

        <Row
          onPress={() =>
            navigation.navigate(PLANS_LIST, {
              plans,
            })
          }>
          <CustomText
            color={Colors.inactiveIcon}
            fontSize={15}
            right={4}
            fontWeight="700">
            View all plans
          </CustomText>
          <ChevRightIcon />
        </Row>
      </SpacedRow>

      <CustomText
        color={Colors.grey_2}
        fontSize={15}
        top={6}
        style={{lineHeight: '22px'}}
        fontWeight="400">
        Start your investment journey by creating a plan"
      </CustomText>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginTop: 20}}>
        <CreatePlanBox onPress={() => navigation.navigate(CREATE_A_PLAN)} />

        {plans.map((plan: PlanItemType, index: number) => (
          <PlanItem
            key={plan?.id}
            title={plan?.plan_name}
            bgColor={colors[index]}
            amount={plan?.target_amount}
            onPress={() => navigation.navigate(PLAN_DETAIL, {plan})}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CreatePlan;
