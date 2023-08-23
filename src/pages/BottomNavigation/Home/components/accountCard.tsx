import React from 'react';
import styled from 'styled-components/native';
import Colors from '../../../../constants/Colors';
import CustomText from '../../../../components/CustomText';
import {ChevRightIcon, HidePassword, ProfitIcon} from '../../../../assets/svgs';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import {ONBOARDING_DATA} from '../../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {Animated} from 'react-native';
import {AccountCardType} from 'utils/types';

const CardWrap = styled.View`
  border-width: 1px;
  border-color: ${Colors.white};
  border-radius: 10px;
  padding-vertical: 15px;
  width: 100%;
  align-items: center;
  min-height: 175px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Line = styled.View`
  height: 1px;
  background-color: ${Colors.light_grey_2};
  margin-top: 12px;
  width: 50%;
`;

const AccountCard = ({balance, returns}: AccountCardType) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <LinearGradient
      colors={['#ffffffcc', '#ffffff00']}
      style={{width: '100%', borderRadius: 10, marginTop: 8}}>
      <CardWrap>
        <Row>
          <CustomText
            fontSize={15}
            right={5}
            fontWeight="400"
            color={Colors.grey_2}>
            Total Balance
          </CustomText>
          <HidePassword />
        </Row>

        <CustomText
          fontSize={32}
          top={5}
          fontWeight="400"
          color={Colors.black_3}>
          ${Number(balance).toFixed(2) || 0.0}
        </CustomText>

        <Line />

        <Row style={{marginTop: 12}}>
          <CustomText fontSize={15} fontWeight="400" color={Colors.grey_2}>
            Total Gains
          </CustomText>
          <ProfitIcon style={{marginHorizontal: 4, marginRight: 10}} />
          <CustomText
            fontSize={15}
            right={4}
            fontWeight="400"
            color={Colors.green}>
            {Number(returns).toFixed(2) || 0.0}%
          </CustomText>
          <ChevRightIcon />
        </Row>

        <ExpandingDot
          data={ONBOARDING_DATA}
          expandingDotWidth={8}
          scrollX={scrollX}
          inActiveDotOpacity={0.6}
          dotStyle={{
            width: 12,
            height: 5,
            borderRadius: 5,
            marginHorizontal: 5,
            bottom: 10,
          }}
          activeDotColor={Colors.primary}
          inActiveDotColor={Colors.light_grey}
          containerStyle={{}}
        />
      </CardWrap>
    </LinearGradient>
  );
};

export default AccountCard;
