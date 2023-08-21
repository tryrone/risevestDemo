import React from 'react';
import SafeAreaWrap from '../../../components/SafeAreaWrap';
import {ScreenDefaultProps} from '../../../navigation/nativationType';
import PageHeader from '../../../components/PageNavigation';
import CustomText from '../../../components/CustomText';
import Colors from '../../../constants/Colors';
import styled from 'styled-components/native';
import {ScrollView, View} from 'react-native';
import PlanChart from './PlanChart';
import {InfoIcon} from '../../../assets/svgs';
import Button from '../../../components/Button';
import {PLAN_DETAIL, SUCCESS_PAGE} from '../../../navigation/constants';

const SpacedRow = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
`;

const SpacedBetween = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 30px;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.light_grey};
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Dot = styled.View<{bgColor: string}>`
  width: 9px;
  height: 9px;
  border-radius: ${9 / 2}px;
  background-color: ${({bgColor}) => bgColor};
`;

const InfoWrap = styled.View`
  padding: 10px;
  border-radius: 8px;
  background-color: ${Colors.light_grey_2};
  flex-direction: row;
  align-items: center;
  margin-top: 27px;
`;

const RickInfo = () => {
  return (
    <InfoWrap>
      <InfoIcon />
      <View style={{width: '85%'}}>
        <CustomText
          color={Colors.grey_1}
          left={10}
          fontSize={15}
          fontWeight="400">
          Returns not guaranteed. Investing involves risk. Read our Disclosures.
        </CustomText>
      </View>
    </InfoWrap>
  );
};

const ReviewHeader = () => {
  return (
    <View>
      <CustomText
        fontSize={12}
        top={10}
        fontWeight="400"
        align="center"
        color={Colors.grey_2}>
        Kate Ventures
      </CustomText>
      <CustomText
        fontSize={24}
        top={7}
        fontWeight="700"
        align="center"
        color={Colors.black}>
        $10,930.75
      </CustomText>
      <CustomText
        fontSize={15}
        top={5}
        fontWeight="400"
        align="center"
        color={Colors.black_4}>
        by 20 June 2021
      </CustomText>
    </View>
  );
};

const PlanReview = ({navigation}: ScreenDefaultProps) => {
  return (
    <SafeAreaWrap style={{paddingHorizontal: 20}}>
      <PageHeader navigation={navigation} title="Review" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ReviewHeader />

        <SpacedRow>
          <Row>
            <Dot bgColor={Colors.inactiveIcon} />
            <CustomText
              color={Colors.inactiveIcon}
              left={6}
              fontSize={12}
              fontWeight="400">
              Investments • $50,400
            </CustomText>
          </Row>
          <Row>
            <Dot bgColor={Colors.primary} />
            <CustomText
              color={Colors.black_4}
              left={6}
              fontSize={12}
              fontWeight="400">
              Returns • $20,803
            </CustomText>
          </Row>
        </SpacedRow>

        <PlanChart />

        <SpacedBetween>
          <CustomText fontSize={15} fontWeight="400" color={Colors.grey_2}>
            Estimated monthly investment
          </CustomText>
          <CustomText fontSize={14} fontWeight="400" color={Colors.black_4}>
            $120
          </CustomText>
        </SpacedBetween>

        <RickInfo />

        <CustomText
          color={Colors.grey_1}
          fontSize={12}
          top={12}
          align="center"
          fontWeight="400">
          These are your starting settings, they can always be updated.
        </CustomText>

        <Button
          text="Agree & Continue"
          textColor={Colors.white}
          fontWeight="700"
          textSize={15}
          style={{marginTop: 47}}
          bgColor={Colors.primary}
          onPress={() =>
            navigation.navigate(SUCCESS_PAGE, {
              title: 'You just created  \n your plan.',
              body: 'Well done, Deborah',
              btnText: 'View plan',
              navigateTo: PLAN_DETAIL,
            })
          }
        />
        <Button
          text="Start over"
          textColor={Colors.primary}
          fontWeight="700"
          textSize={15}
          style={{marginTop: 10, marginBottom: 30}}
          bgColor={Colors.grey}
          // onPress={() => navigation.navigate(BOTTOM_NAV)}
        />
      </ScrollView>
    </SafeAreaWrap>
  );
};

export default PlanReview;
