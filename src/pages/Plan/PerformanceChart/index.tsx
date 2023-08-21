import React, {useState} from 'react';
import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';
import CustomText from '../../../components/CustomText';
import SegmentControlTab from '../../../components/segmentControlTab';
import Fonts from '../../../constants/Fonts';

const ChartContainer = styled.View`
  height: 424px;
  width: 100%;
  border-radius: 12px;
  background-color: ${Colors.primary};
  margin-top: 23px;
  padding-vertical: 19px;
`;

const SpacedRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 13px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Dot = styled.View<{bgColor: string}>`
  width: 9px;
  height: 9px;
  border-radius: ${9 / 2}px;
  background-color: ${({bgColor}) => bgColor};
`;

const PaddedView = styled.View`
  padding-horizontal: 20px;
  width: 100%;
  height: 85%;
  position: relative;
`;

const FloatingContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  align-self: center;
`;

const segmentStyle = {
  segmentsControl: {
    activeTextStyle: {
      color: Colors.primary,
      fontSize: 12,
      fontFamily: Fonts.DMSansRegular,
    },
    inactiveTextStyle: {
      color: Colors.white,
      fontSize: 12,
      fontFamily: Fonts.DMSansRegular,
    },
  },
};

const Sections = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const sections = ['1M', '3M', '6M', 'All'];
  return (
    <FloatingContainer>
      <SegmentControlTab
        activeSegmentBackgroundColor={Colors.white}
        activeTextStyle={segmentStyle.segmentsControl.activeTextStyle}
        currentIndex={selectedIndex}
        inactiveTextStyle={segmentStyle.segmentsControl.inactiveTextStyle}
        onChange={(index: number): void => {
          setSelectedIndex(index);
        }}
        paddingVertical={1}
        segmentedControlBackgroundColor={Colors.secondary}
        tabs={sections}
      />
    </FloatingContainer>
  );
};

const PerformanceChart = () => {
  return (
    <ChartContainer
      style={{
        backgroundColor: Colors.primary,
        borderRadius: 8,
        elevation: 4, // For Android
        shadowColor: 'rgba(43, 57, 75, 0.15)', // For iOS
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 16,
      }}>
      <CustomText
        color={Colors.white}
        fontSize={15}
        align="center"
        fontWeight="400">
        Performance
      </CustomText>
      <CustomText
        color={Colors.white}
        fontSize={24}
        align="center"
        fontWeight="700">
        $208.39
      </CustomText>
      <CustomText
        color={Colors.white}
        fontSize={13}
        align="center"
        fontWeight="400">
        July 26th, 2021
      </CustomText>
      <PaddedView>
        <SpacedRow>
          <Row>
            <Dot bgColor={Colors.white} />
            <CustomText
              color={Colors.white}
              left={6}
              fontSize={12}
              fontWeight="400">
              Investments • $50,400
            </CustomText>
          </Row>
          <Row>
            <Dot bgColor={Colors.secondary} />
            <CustomText
              color={Colors.white}
              left={6}
              fontSize={12}
              fontWeight="400">
              Returns • $20,803
            </CustomText>
          </Row>
        </SpacedRow>

        <Sections />
      </PaddedView>
    </ChartContainer>
  );
};

export default PerformanceChart;
