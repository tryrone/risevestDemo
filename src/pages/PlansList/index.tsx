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

interface PlanItemProps {
  title: string;
  amount: string;
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
            {amount}
          </CustomText>
        </View>
        <WhiteArrowRightSvg />
      </FloatingView>
    </PlanItemWrap>
  );
};

const PlansList = ({navigation}: ScreenDefaultProps) => {
  const plans = [
    {
      title: 'Plan a wedding',
      amount: '$1,983.09',
      bgColor: Colors.teal,
    },
    {
      title: 'Start a Business',
      amount: '$1,983.09',
      bgColor: Colors.orange_2,
    },
    {
      title: 'Build Wealth',
      amount: '$1,983.09',
      bgColor: Colors.dark_teal,
    },
  ];
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
        {plans.map((plan, index) => (
          <PlanItem
            key={index}
            {...plan}
            onPress={() => {
              navigation.navigate(PLAN_DETAIL);
            }}
          />
        ))}
      </RowWrap>
    </SafeAreaWrap>
  );
};

export default PlansList;
