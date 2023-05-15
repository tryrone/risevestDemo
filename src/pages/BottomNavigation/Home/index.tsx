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

const Home = () => {
  return (
    <CardSafeAreaWrap safeAreaBg={Colors?.white} bg={Colors.white}>
      <RainbowWrap source={rainbow} resizeMode="stretch" />
      <PaddedView>
        <HeaderComponent />
        <ScrollView showsVerticalScrollIndicator={false}>
          <AccountCard />
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
          <CreatePlan />
          <ContactUs />
          <QuoteCard />
        </ScrollView>
      </PaddedView>
    </CardSafeAreaWrap>
  );
};

export default Home;
