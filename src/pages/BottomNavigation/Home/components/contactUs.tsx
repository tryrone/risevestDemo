import React from 'react';
import styled from 'styled-components/native';
import Colors from '../../../../constants/Colors';
import {QuestionIcon} from '../../../../assets/svgs';
import CustomText from '../../../../components/CustomText';
import Button from '../../../../components/Button';

const Card = styled.View`
  background-color: ${Colors.white};
  padding: 12px;
  border-radius: 12px;
  margin-top: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ContactUs = () => {
  return (
    <Card
      style={{
        shadowColor: 'rgba(53, 71, 89, 0.65)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,

        elevation: 3,
      }}>
      <Row>
        <QuestionIcon />

        <CustomText fontSize={15} left={10} fontWeight="500">
          Need help?
        </CustomText>
      </Row>

      <Button
        bgColor={Colors.primary}
        borderRadius="6px"
        height="42px"
        text="Contact us"
        textSize={15}
        fontWeight="400"
        width={123}
      />
    </Card>
  );
};

export default ContactUs;
