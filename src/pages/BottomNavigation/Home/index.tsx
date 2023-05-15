import React from 'react';
import styled from 'styled-components/native';
import CardSafeAreaWrap from './components/cardSafeArea';
import Colors from '../../../constants/Colors';
import CustomText from '../../../components/CustomText';
import {rainbow} from '../../../assets/images';
import {View} from 'react-native';
import {BellIcon} from '../../../assets/svgs';
import Button from '../../../components/Button';

const SpacedRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const RainbowWrap = styled.ImageBackground`
  width: 100%;
  height: 60%;
`;

const PaddedView = styled.View`
  padding-horizontal: 20px;
  width: 100%;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Home = () => {
  return (
    <CardSafeAreaWrap safeAreaBg={Colors?.white} bg={Colors.white}>
      <RainbowWrap source={rainbow} resizeMode="stretch">
        <PaddedView>
          <SpacedRow>
            <View style={{marginTop: 14}}>
              <CustomText color={Colors.black_4} fontSize={15} fontWeight="400">
                Good morning ☀
              </CustomText>
              <CustomText color={Colors.black_4} fontSize={20} fontWeight="400">
                Deborah
              </CustomText>
            </View>

            <Row style={{justifyContent: 'flex-end'}}>
              <Button
                text="Earn 3% bonus"
                width="60%"
                containerStyle={{position: 'relative', right: 20}}
                height="30px"
                borderRadius="50px"
                textColor={Colors.white}
                textSize={12}
                fontWeight="400"
                bgColor={Colors.primary}
              />
              <BellIcon style={{position: 'relative', right: 10}} />
            </Row>
          </SpacedRow>
        </PaddedView>
      </RainbowWrap>
    </CardSafeAreaWrap>
  );
};

export default Home;
