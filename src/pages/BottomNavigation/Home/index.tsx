import React from 'react';
import styled from 'styled-components/native';
import CardSafeAreaWrap from './components/cardSafeArea';
import Colors from '../../../constants/Colors';
import {rainbow} from '../../../assets/images';
import HeaderComponent from './components/headerComponent';
import AccountCard from './components/accountCard';
import Button from '../../../components/Button';
import {PlusIcon} from '../../../assets/svgs';

const RainbowWrap = styled.ImageBackground`
  width: 100%;
  height: 65%;
`;

const PaddedView = styled.View`
  padding-horizontal: 20px;
  width: 100%;
`;

const Home = () => {
  return (
    <CardSafeAreaWrap safeAreaBg={Colors?.white} bg={Colors.white}>
      <RainbowWrap source={rainbow} resizeMode="stretch">
        <PaddedView>
          <HeaderComponent />
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
        </PaddedView>
      </RainbowWrap>
    </CardSafeAreaWrap>
  );
};

export default Home;
