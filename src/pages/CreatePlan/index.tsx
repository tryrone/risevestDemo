import React from 'react';
import SafeAreaWrap from '../../components/SafeAreaWrap';
import styled from 'styled-components/native';
import {ScreenDefaultProps} from '../../navigation/nativationType';
import {View} from 'react-native';
import {
  BigCalenderIcon,
  BigQuestionIcon,
  BigSettingsIcon,
  CartIcon,
} from '../../assets/svgs';
import CustomText from '../../components/CustomText';
import Colors from '../../constants/Colors';
import Button from '../../components/Button';
import PageHeader from '../../components/PageNavigation';
import {CREATE_PLAN_STEPS} from '../../navigation/constants';

type DetailItemProps = {
  icon: JSX.Element;
  text: string;
  title: string;
  mt: number;
};

const Row = styled.View<{mt: number}>`
  flex-direction: row;
  margin-top: ${props => props.mt || 0}px;
`;

const DetailItem = ({icon, text, title, mt}: DetailItemProps) => {
  return (
    <Row mt={mt}>
      {icon}
      <View style={{flex: 1}}>
        <CustomText
          fontSize={16}
          fontWeight="700"
          color={Colors.black}
          left={10}>
          {title}
        </CustomText>
        <CustomText
          top={2}
          fontSize={13}
          fontWeight="400"
          style={{lineHeight: '19px'}}
          color={Colors.grey_2}
          left={10}>
          {text}
        </CustomText>
      </View>
    </Row>
  );
};

const CreatePlan = ({navigation}: ScreenDefaultProps) => {
  return (
    <SafeAreaWrap style={{paddingTop: 20, paddingHorizontal: 20}}>
      <PageHeader navigation={navigation} title="Create a plan" />
      <CustomText
        top={5}
        fontSize={15}
        align="center"
        fontWeight="400"
        color={Colors.grey_2}>
        Reach your goals faster
      </CustomText>

      <CartIcon style={{alignSelf: 'center', marginTop: 61}} />

      <DetailItem
        icon={<BigQuestionIcon />}
        mt={50}
        title="Give us a few details"
        text="Tell us what you want to achieve and we will help you get there"
      />
      <DetailItem
        icon={<BigCalenderIcon />}
        mt={24}
        title="Turn on auto-invest"
        text="The easiest way to get your investment working for you is to fund to periodically. "
      />
      <DetailItem
        icon={<BigSettingsIcon />}
        mt={24}
        title="Modify as you progress"
        text="You are in charge. Make changes to your plan, from adding funds, funding source, adding money to your wallet and more."
      />

      <Button
        text="Continue"
        fontWeight="700"
        textSize={16}
        textColor={Colors.white}
        containerStyle={{
          position: 'absolute',
          bottom: 20,
          alignSelf: 'center',
        }}
        onPress={() => navigation.navigate(CREATE_PLAN_STEPS)}
      />
    </SafeAreaWrap>
  );
};

export default CreatePlan;
