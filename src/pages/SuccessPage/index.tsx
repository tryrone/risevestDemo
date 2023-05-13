import React from 'react';
import SafeAreaWrap from '../../components/SafeAreaWrap';
import {SuccessCheck} from '../../assets/svgs';
import CustomText from '../../components/CustomText';
import Colors from '../../constants/Colors';
import Button from '../../components/Button';
import {View} from 'react-native';
import {ScreenDefaultProps} from '../../navigation/nativationType';

type SusccessProps = {
  title: string;
  body: string;
  btnText: string;
  navigateTo?: string;
};

const SuccessPage = ({navigation, route}: ScreenDefaultProps) => {
  const {title, body, btnText, navigateTo}: SusccessProps | any = route?.params;
  return (
    <SafeAreaWrap style={{paddingHorizontal: 20, alignItems: 'center'}}>
      <SuccessCheck style={{marginTop: '30%'}} />
      <CustomText
        fontSize={20}
        fontWeight="400"
        top={16}
        align="center"
        style={{width: '60%', lineHeight: '26px'}}>
        {title}
      </CustomText>

      <CustomText
        fontSize={15}
        fontWeight="400"
        align="center"
        top={10}
        color={Colors.grey_2}
        style={{width: '70%', lineHeight: '22px'}}>
        {body}
      </CustomText>

      <View
        style={{
          position: 'absolute',
          bottom: 30,
          alignSelf: 'center',
          width: '100%',
        }}>
        <Button
          text={btnText}
          fontWeight="700"
          textColor={Colors.white}
          bgColor={Colors.primary}
          textSize={15}
          onPress={() => navigateTo && navigation.navigate(navigateTo)}
        />
      </View>
    </SafeAreaWrap>
  );
};

export default SuccessPage;
