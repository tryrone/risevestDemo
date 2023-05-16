import React from 'react';
import {ScreenDefaultProps} from '../../navigation/nativationType';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {BackBtnSvg} from '../../assets/svgs';
import CustomText from '../CustomText';

interface PageHeaderProps extends ScreenDefaultProps {
  title: string;
}

const SpacedRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.View`
  height: 50px;
  width: 50px;
`;

const PageHeader = ({navigation, title}: PageHeaderProps) => {
  return (
    <SpacedRow>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackBtnSvg />
      </TouchableOpacity>

      <CustomText fontSize={24} fontWeight="700">
        {title}
      </CustomText>

      <Box />
    </SpacedRow>
  );
};

export default PageHeader;
