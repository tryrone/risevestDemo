import React from 'react';
import CardSafeAreaWrap from '../BottomNavigation/Home/components/cardSafeArea';
import Colors from '../../constants/Colors';
import styled from 'styled-components/native';
import {plan_header} from '../../assets/images';
import {PlanBackIcon, PlanBurgerIcon} from '../../assets/svgs';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import CustomText from '../../components/CustomText';
import Fonts from '../../constants/Fonts';
import {ScreenDefaultProps} from '../../navigation/nativationType';
import PlanBalance from './PlanBalance';
import PerformanceChart from './PerformanceChart';
import EarningsData from './EarningsData';
import RecentTransactions from './RecentTransactions';
import {BOTTOM_NAV} from 'navigation/constants';
import {useGetPlanByIdQuery} from 'rtk/services/user/userApi';

interface PlanHeaderProps {
  goBack: () => void;
  data?: Record<any, any>;
}

const RainbowWrap = styled.Image`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
`;

const PaddedView = styled.View`
  padding-horizontal: 20px;
  width: 100%;
  padding-bottom: 40px;
`;

const SpacedRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 22px;
  margin-bottom: 35px;
`;

const PlanHeader = ({goBack, data}: PlanHeaderProps) => {
  return (
    <SpacedRow>
      <TouchableOpacity onPress={goBack}>
        <PlanBackIcon />
      </TouchableOpacity>
      <View
        style={{
          width: '70%',
        }}>
        <CustomText
          color={Colors.white}
          fontSize={24}
          align="center"
          fontFamily={Fonts?.DMSansBold}
          fontWeight="700">
          Start a business
        </CustomText>
        <CustomText
          color={Colors.white}
          fontSize={15}
          align="center"
          fontWeight="400">
          for {data?.plan_name}
        </CustomText>
      </View>

      <PlanBurgerIcon />
    </SpacedRow>
  );
};

const Plan = ({navigation, route}: ScreenDefaultProps) => {
  const plan = route?.params?.plan;

  const {data} = useGetPlanByIdQuery(plan?.id, {
    skip: !plan?.id,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  const planData = data || plan;

  const goBack = () => {
    navigation?.navigate(BOTTOM_NAV);
  };

  return (
    <CardSafeAreaWrap
      safeAreaBg={Colors?.white}
      bgImage={plan_header}
      safeAreaBgPercent={90}
      bg={Colors.white}>
      <RainbowWrap source={plan_header} resizeMode="stretch" />
      <PaddedView>
        <PlanHeader goBack={goBack} data={planData} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <PlanBalance data={planData} />
          <PerformanceChart data={planData} />
          <EarningsData data={planData} />
          <RecentTransactions />
        </ScrollView>
      </PaddedView>
    </CardSafeAreaWrap>
  );
};

export default Plan;
