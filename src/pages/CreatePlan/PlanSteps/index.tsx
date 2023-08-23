import React from 'react';
import SafeAreaWrap from '../../../components/SafeAreaWrap';
import PageHeader from '../../../components/PageNavigation';
import {ScreenDefaultProps} from '../../../navigation/nativationType';
import CustomText from '../../../components/CustomText';
import Colors from '../../../constants/Colors';
import styled from 'styled-components/native';
import PlanName from './PlanName';
import PlanAmount from './PlanAmount';
import PlanWithdrawalDate from './PlanWithdrawalDate';
import {ProgressBarType} from 'utils/types';
import PagerView from 'react-native-pager-view';
import {View} from 'react-native';
import {CreatePlanContext} from '../../../context/createPlanContext';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

const ProgressWrap = styled.View`
  width: 100%;
  height: 10px;
  border-radius: 10px;
  background-color: ${Colors.grey};
  margin-top: 35px;
  position: relative;
  margin-bottom: 60px;
`;

const Progress = styled(Animated.View)`
  height: 100%;
  border-radius: 10px;
  background-color: ${Colors.primary};
`;

const ProgressBar = ({percentage}: ProgressBarType) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(`${percentage}%`, {duration: 500}),
    };
  });

  return (
    <ProgressWrap>
      <Progress style={animatedStyle} />
    </ProgressWrap>
  );
};

const PlanSteps = ({navigation}: ScreenDefaultProps) => {
  const [step, setStep] = React.useState<any>(null);

  const pageRef = React.useRef<any>(null);

  const [planForm, setPlanForm] = React.useState<any>({
    name: '',
    amount: '',
    date: '',
  });

  const pages = [
    {
      title: 'Goal name',
      component: (
        <PlanName
          next={() => {
            pageRef?.current?.setPage(1);
            setStep(2);
          }}
        />
      ),
    },
    {
      title: 'Target amount',
      component: (
        <PlanAmount
          next={() => {
            pageRef?.current?.setPage(2);
            setStep(3);
          }}
        />
      ),
    },
    {
      title: 'Target date',
      component: <PlanWithdrawalDate navigation={navigation} />,
    },
  ];

  return (
    <SafeAreaWrap style={{paddingHorizontal: 20}}>
      <PageHeader
        navigation={navigation}
        title={pages?.[step - 1 || 0]?.title}
        goBack={() => {
          if (step === 1) {
            navigation.goBack();
          } else {
            pageRef?.current?.setPage(step - 2);
            setStep(step - 1);
          }
        }}
        useCustomBack={true}
      />

      <CustomText fontSize={15} fontWeight="400" top={17} color={Colors.grey_2}>
        Question {step || 1} of 3
      </CustomText>

      <ProgressBar percentage={((step || 1) / 3) * 100} />

      <CreatePlanContext.Provider
        value={{
          planForm,
          setPlanForm,
        }}>
        <PagerView
          ref={pageRef}
          scrollEnabled={false}
          onPageSelected={(e: any) => {
            setStep(e.nativeEvent.position + 1);
          }}
          style={{height: '70%'}}
          initialPage={0}>
          {pages.map((page, index) => (
            <View key={index}>{page.component}</View>
          ))}
        </PagerView>
      </CreatePlanContext.Provider>
    </SafeAreaWrap>
  );
};

export default PlanSteps;
