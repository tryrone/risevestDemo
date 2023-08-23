import {View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import CustomText from '../../../../components/CustomText';
import Colors from '../../../../constants/Colors';
import Button from '../../../../components/Button';
import {BellIcon} from '../../../../assets/svgs';
import {HomeHeaderType} from 'utils/types';

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SpacedRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const HeaderComponent = ({userName}: HomeHeaderType) => {
  const timeOfDay = new Date().getHours();

  const greeting =
    timeOfDay < 12
      ? 'Good morning ☀'
      : timeOfDay < 18
      ? 'Good afternoon'
      : 'Good evening 🌝';

  return (
    <SpacedRow>
      <View style={{marginTop: 14}}>
        <CustomText color={Colors.black_4} fontSize={15} fontWeight="400">
          {greeting}
        </CustomText>
        <CustomText color={Colors.black_4} fontSize={20} fontWeight="400">
          {userName}
        </CustomText>
      </View>

      <Row style={{justifyContent: 'flex-end'}}>
        <Button
          text="Earn 3% bonus"
          width={111}
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
  );
};

export default HeaderComponent;
