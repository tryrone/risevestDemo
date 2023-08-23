import React from 'react';
import styled from 'styled-components/native';
import CardSafeAreaWrap from './components/cardSafeArea';
import Colors from '../../../constants/Colors';
import {rainbow} from '../../../assets/images';
import HeaderComponent from './components/headerComponent';
import AccountCard from './components/accountCard';
import Button from '../../../components/Button';
import {PlusIcon} from '../../../assets/svgs';
import CreatePlan from './components/createPlan';
import {ScrollView} from 'react-native';
import ContactUs from './components/contactUs';
import QuoteCard from './components/quoteCard';
import {ScreenDefaultProps} from '../../../navigation/nativationType';
import {useGetUserSessionQuery} from 'rtk/services/user/userApi';
import {SessionData} from 'utils/types';

const RainbowWrap = styled.Image`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 0;
  left: 0;
`;

const PaddedView = styled.View`
  padding-horizontal: 20px;
  width: 100%;
  padding-bottom: 40px;
`;

const Home = ({navigation, route}: ScreenDefaultProps) => {
  const info = route?.params?.data;

  const {data} = useGetUserSessionQuery({});

  const sessionData: SessionData | undefined = info || data;

  return (
    <CardSafeAreaWrap safeAreaBg={Colors?.white} bg={Colors.white}>
      <RainbowWrap source={rainbow} resizeMode="stretch" />
      <PaddedView>
        <HeaderComponent userName={sessionData?.first_name} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <AccountCard
            balance={sessionData?.total_balance}
            returns={sessionData?.total_returns}
          />
          <Button
            text="Add money"
            bgColor={Colors.white}
            borderRadius="5px"
            textColor={Colors.primary}
            textSize={15}
            fontWeight="700"
            height="56px"
            icon={
              <PlusIcon
                style={{position: 'relative', top: -2, marginRight: 5}}
              />
            }
            style={{
              borderColor: Colors.light_grey,
              borderWidth: 1,
              marginTop: 24,
            }}
          />
          <CreatePlan navigation={navigation} />
          <ContactUs />
          <QuoteCard />
        </ScrollView>
      </PaddedView>
    </CardSafeAreaWrap>
  );
};

export default Home;
