import {ActivityIndicator} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import Colors from 'constants/Colors';
import CustomText from 'components/CustomText';

const Wrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${Colors.primary};
`;

const LoadingScreen = () => {
  return (
    <Wrap>
      <ActivityIndicator size="large" color={Colors.white} />
      <CustomText fontSize={20} fontWeight="700" top={10} color={Colors.white}>
        Risevest
      </CustomText>
    </Wrap>
  );
};

export default LoadingScreen;
