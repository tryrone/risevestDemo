import React from 'react';
import {ScreenDefaultProps} from '../../navigation/nativationType';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {BackBtnSvg} from '../../assets/svgs';
import CustomText from '../CustomText';

interface PageHeaderProps extends ScreenDefaultProps {
  title: string;
  useCustomBack?: boolean;
  goBack?: () => void;
}

const SpacedRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Box = styled.View`
  height: 50px;
  width: 50px;
`;

const PageHeader = ({
  navigation,
  title,
  goBack,
  useCustomBack,
}: PageHeaderProps) => {
  return (
    <SpacedRow>
      <TouchableOpacity
        onPress={() =>
          useCustomBack ? goBack && goBack() : navigation.goBack()
        }>
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
