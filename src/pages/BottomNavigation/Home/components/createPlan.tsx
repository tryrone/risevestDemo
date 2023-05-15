import {View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import CustomText from '../../../../components/CustomText';
import Colors from '../../../../constants/Colors';
import {ChevRightIcon, PlusBtnIcon} from '../../../../assets/svgs';

const SpacedRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 31px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CreatePlanWrap = styled.TouchableOpacity`
  width: 188px;
  height: 243px;
  border-radius: 12px;
  background-color: ${Colors.light_grey_2};
  justify-content: center;
  align-items: center;
`;

const CreatePlanBox = (): JSX.Element => {
  return (
    <CreatePlanWrap>
      <PlusBtnIcon />
      <CustomText
        color={Colors.black}
        style={{width: '70%'}}
        align="center"
        fontSize={14}
        fontWeight="700"
        top={5}>
        Create an investment plan
      </CustomText>
    </CreatePlanWrap>
  );
};

const CreatePlan = () => {
  return (
    <View>
      <SpacedRow>
        <CustomText color={Colors.black} fontSize={18} fontWeight="400">
          Create a plan
        </CustomText>

        <Row>
          <CustomText
            color={Colors.inactiveIcon}
            fontSize={15}
            right={4}
            fontWeight="700">
            View all plans
          </CustomText>
          <ChevRightIcon />
        </Row>
      </SpacedRow>

      <CustomText
        color={Colors.grey_2}
        fontSize={15}
        top={6}
        style={{lineHeight: '22px'}}
        fontWeight="400">
        Start your investment journey by creating a plan"
      </CustomText>

      <View style={{marginTop: 20}}>
        <CreatePlanBox />
      </View>
    </View>
  );
};

export default CreatePlan;
