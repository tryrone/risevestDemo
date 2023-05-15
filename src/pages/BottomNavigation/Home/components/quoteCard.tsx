import React from 'react';
import styled from 'styled-components/native';
import Colors from '../../../../constants/Colors';
import CustomText from '../../../../components/CustomText';
import {RiseIcon, ShareIcon} from '../../../../assets/svgs';

const Card = styled.View`
  margin-top: 30px;
  background-color: ${Colors.primary};
  border-radius: 15px;
  border-width: 2px;
  border-color: ${Colors.secondary};
  padding: 20px;
`;

const Line = styled.View`
  height: 2px;
  width: 10%;
  background-color: ${Colors.white};
  margin-vertical: 20px;
`;

const SpacedRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const QuoteCard = () => {
  return (
    <>
      <Card>
        <CustomText fontSize={14} fontWeight="700" color={Colors.white}>
          TODAY’S QUOTE
        </CustomText>
        <Line />
        <CustomText
          color={Colors.white}
          fontSize={15}
          fontWeight="400"
          style={{lineHeight: '22px'}}>
          We have no intention of rotating capital out of strong multi-year
          investments because they’ve recently done well or because ‘growth’ has
          out performed ‘value’.
        </CustomText>

        <SpacedRow>
          <CustomText color={Colors.white} fontSize={15} fontWeight="700">
            Carl Sagan
          </CustomText>

          <ShareIcon />
        </SpacedRow>
      </Card>

      <RiseIcon style={{marginVertical: 32, alignSelf: 'center'}} />
    </>
  );
};

export default QuoteCard;
