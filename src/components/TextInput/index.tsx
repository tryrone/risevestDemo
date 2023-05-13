/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  KeyboardTypeOptions,
  Pressable,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import CustomText from '../CustomText';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {
  ActivePassword,
  ChevDown,
  HidePassword,
  CalenderIcon,
} from '../../assets/svgs';
import OtpInputs from 'react-native-otp-inputs';
import PhonePadKeyboard from '../NumberPad';

const {width: screenWidth} = Dimensions.get('window');

type TextInputProps = {
  marginTop?: number;
  placeholder?: string;
  placeholderTextColor?: string;
  inputType?: KeyboardTypeOptions;
  returnValue?: boolean;
  handleChange?: ((e: string) => void) | undefined;
  name?: string;
  errors?: string;
  value: string;
  showNaira?: boolean;
  onWrapPress?: ((e: boolean) => void) | undefined;
  disabled?: boolean;
};

type PasswordProps = {
  bgColor?: string;
  placeholder: string;
  placeholderTextColor?: string;
  handleChange?: ((e: string) => void) | undefined | any;
  name?: string;
  value: string;
  disabled?: boolean;
  errors?: string;
  marginTop?: number;
  style?: ViewStyle;
  setFieldTouched?: ((e: any) => void) | undefined;
  onPress?: () => void | undefined;
};

type CodeInputProps = {
  mt?: number;
};

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  border-right-width: 1px;
  border-right-color: ${Colors.border};
  padding-right: 5px;
`;

const CountryFlag = styled.Image`
  height: 18px;
  width: 18px;
  border-radius: ${18 / 2}px;
`;

const Wrapper = styled.View<{
  width?: number;
  active?: boolean;
  marginTop?: number;
}>`
  height: 56px;
  width: ${props => props?.width || 100}%;
  border-width: ${props => (props?.active ? 1.5 : 1)}px;
  border-color: ${props => (props?.active ? Colors.primary : Colors?.border)};
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${props => props?.marginTop || 0}px;
  padding-horizontal: 12px;
  z-index: 4;
`;

const DisabledView = styled.Pressable<{
  width?: number;
  marginTop?: number;
}>`
  height: 56px;
  width: ${props => props?.width || 100}%;
  margin-top: ${props => props?.marginTop || 0}px;
  z-index: 6;
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
`;

const TextWrap: any = styled.TextInput<{widthPercent?: number}>`
  height: 100%;
  width: ${({widthPercent}) => widthPercent || 100}%;
  font-family: ${Fonts?.DMSansRegular};
  font-size: 15px;
  font-weight: 700;
  color: ${Colors?.black};
  align-items: center;
`;

const ViewWrap = styled.View<{
  width?: string;
  top?: number;
  bottom?: number;
  viewStyle?: {};
}>`
  position: relative;
  width: ${({width}) => width || '100%'};
  margin-top: ${({top}) => top}px;
  margin-bottom: ${({bottom}) => bottom || 0}px;
  ${({viewStyle}) => viewStyle};
`;

const InputWithIcon = styled.Pressable<{
  bgColor: string;
  borderColor: string;
  active: boolean;
}>`
  flex-direction: row;
  width: 100%;
  background-color: ${({bgColor}) => bgColor};
  padding-horizontal: 16px;
  height: 55px;
  border-radius: 5px;
  border-width: ${props => (props?.active ? 1.5 : 1)}px;
  border-color: ${props => (props?.active ? Colors.primary : Colors?.border)};
  justify-content: space-between;
  align-items: center;
`;

const PasswordInput = styled.TextInput<{
  width?: string;
}>`
  width: ${({width}) => width || '100%'};
  color: ${Colors?.black}
  height: 52px;
  text-align: left;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
`;

const TextInput = ({
  marginTop = 0,
  placeholder = '',
  placeholderTextColor = Colors.placeholderColor,
  inputType = 'default',
  returnValue = false,
  handleChange = () => {},
  name = '',
  errors = '',
  value,
  showNaira = false,
  onWrapPress,
  disabled,
}: TextInputProps) => {
  const [focused, setFocused] = useState(false);

  const translateY = useSharedValue(value ? 18 : 45);
  const animatedIndex = useSharedValue(value ? 5 : 0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
      zIndex: animatedIndex?.value,
    };
  });

  useEffect(() => {
    if (focused) {
      translateY.value = withTiming(18);
      animatedIndex.value = withTiming(5);
    }
    if (!focused && !value) {
      translateY.value = withTiming(45);
      animatedIndex.value = withTiming(0);
    }
  }, [focused, translateY, animatedIndex]);

  useEffect(() => {
    if (errors.length > 0) {
      setFocused(false);
    }
  }, [errors]);

  return (
    <Pressable style={{marginTop}}>
      {disabled && (
        <DisabledView
          onPress={() => {
            onWrapPress && onWrapPress(true);
          }}
          marginTop={marginTop}
        />
      )}

      <Animated.View style={[animatedStyles, {zIndex: animatedIndex?.value}]}>
        <CustomText
          style={{
            zIndex: 3,
            backgroundColor: 'white',
            alignSelf: 'flex-start',
            paddingHorizontal: 6,
            marginLeft: 9,
          }}
          fontFamily={Fonts.DMSansMedium}
          bottom={4}
          fontSize={focused || value ? 12 : 15}
          fontWeight="700"
          color={focused ? Colors?.primary : placeholderTextColor}>
          {placeholder}
        </CustomText>
      </Animated.View>

      <Wrapper active={focused}>
        {showNaira && (
          <CustomText
            color={Colors.placeholderColor}
            align="left"
            right={5}
            fontWeight="800"
            fontSize={14}
            fontFamily={Fonts.DMSansBold}>
            ₦
          </CustomText>
        )}

        <TextWrap
          placeholder={''}
          keyboardType={inputType}
          onChangeText={
            returnValue
              ? (e: string) => {
                  handleChange(e);
                }
              : handleChange(name)
          }
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
          }}
          value={value}
        />
      </Wrapper>
      {errors.length > 0 && (
        <View>
          <CustomText
            fontWeight="600"
            top={4}
            left={5}
            fontFamily={Fonts?.DMSansMedium}
            fontSize={13}
            color={Colors.error}>
            {errors}
          </CustomText>
        </View>
      )}
    </Pressable>
  );
};

export const Password = ({
  bgColor = 'rgba(0,0,0,0)',
  placeholder,
  placeholderTextColor = Colors.placeholderColor,
  handleChange = () => {},
  name = '',
  value,
  disabled = false,
  errors = '',
  marginTop = 0,
  style,
  setFieldTouched = () => {},
}: PasswordProps) => {
  const [hidden, setHidden] = useState(false);
  const [focused, setFocused] = useState(false);

  const translateY = useSharedValue(value ? 18 : 45);
  const animatedIndex = useSharedValue(value ? 3 : 0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
      zIndex: animatedIndex?.value,
    };
  });

  useEffect(() => {
    if (focused) {
      translateY.value = withTiming(18);
      animatedIndex.value = withTiming(3);
    }
    if (!focused && !value) {
      translateY.value = withTiming(45);
      animatedIndex.value = withTiming(0);
    }
  }, [focused, translateY, animatedIndex]);

  useEffect(() => {
    if (errors.length > 0) {
      setFocused(false);
    }
  }, [errors]);

  return (
    <ViewWrap
      bottom={errors.length > 0 ? 16 : 0}
      top={marginTop}
      style={style}
      width="100%">
      <Animated.View style={[animatedStyles, {zIndex: animatedIndex?.value}]}>
        <CustomText
          style={{
            zIndex: 3,
            backgroundColor: 'white',
            alignSelf: 'flex-start',
            paddingHorizontal: 6,
            marginLeft: 9,
          }}
          fontFamily={Fonts.DMSansMedium}
          bottom={4}
          fontSize={focused || value ? 12 : 15}
          fontWeight="700"
          color={focused ? Colors?.primary : placeholderTextColor}>
          {placeholder}
        </CustomText>
      </Animated.View>

      <InputWithIcon
        active={focused}
        borderColor={focused ? Colors.primary : Colors.border}
        bgColor={bgColor}>
        <PasswordInput
          onChangeText={handleChange(name)}
          autoCapitalize={'none'}
          width="80%"
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
            setFieldTouched(name);
          }}
          secureTextEntry={!hidden}
          value={value}
          editable={!disabled}
        />
        <TouchableOpacity onPress={() => setHidden(!hidden)}>
          {hidden ? <ActivePassword /> : <HidePassword />}
        </TouchableOpacity>
      </InputWithIcon>
      {errors.length > 0 && (
        <View>
          <CustomText
            fontWeight="600"
            top={3}
            left={5}
            fontFamily={Fonts?.DMSansMedium}
            fontSize={13}
            color={Colors.error}>
            {errors}
          </CustomText>
        </View>
      )}
    </ViewWrap>
  );
};

export const PhoneNumberInput = ({
  marginTop = 0,
  placeholder = '',
  placeholderTextColor = Colors.placeholderColor,
  inputType = 'default',
  returnValue = false,
  handleChange = () => {},
  name = '',
  errors = '',
  value,
  onWrapPress,
  disabled,
}: TextInputProps) => {
  const [focused, setFocused] = useState(false);
  const placeholderImage =
    'https://cdn.britannica.com/68/5068-004-72A3F250/Flag-Nigeria.jpg';
  const fromTranslateX = screenWidth * 0.28;
  const toTranslateX = 0;

  const translateY = useSharedValue(value ? 18 : 45);
  const translateX = useSharedValue(value ? toTranslateX : fromTranslateX);
  const animatedIndex = useSharedValue(value ? 5 : 0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: translateY.value},
        {translateX: translateX.value},
      ],
      zIndex: animatedIndex?.value,
    };
  });

  useEffect(() => {
    if (focused) {
      translateY.value = withTiming(18);
      translateX.value = withTiming(toTranslateX);
      animatedIndex.value = withTiming(5);
    }
    if (!focused && !value) {
      translateY.value = withTiming(45);
      translateX.value = withTiming(fromTranslateX);
      animatedIndex.value = withTiming(0);
    }
  }, [focused, translateY, animatedIndex]);

  useEffect(() => {
    if (errors.length > 0) {
      setFocused(false);
    }
  }, [errors]);

  return (
    <Pressable style={{marginTop}}>
      {disabled && (
        <DisabledView
          onPress={() => {
            onWrapPress && onWrapPress(true);
          }}
          marginTop={marginTop}
        />
      )}

      <Animated.View style={[animatedStyles, {zIndex: animatedIndex?.value}]}>
        <CustomText
          style={{
            zIndex: 3,
            backgroundColor: 'white',
            alignSelf: 'flex-start',
            paddingHorizontal: 6,
            marginLeft: 9,
          }}
          fontFamily={Fonts.DMSansMedium}
          bottom={4}
          fontSize={focused || value ? 12 : 15}
          fontWeight="700"
          color={focused ? Colors?.primary : placeholderTextColor}>
          {placeholder}
        </CustomText>
      </Animated.View>

      <Wrapper active={focused}>
        <Row>
          <CountryFlag source={{uri: placeholderImage}} resizeMode="stretch" />
          <CustomText
            color={Colors.placeholderColor}
            align="left"
            right={5}
            left={5}
            fontWeight="800"
            fontSize={14}
            fontFamily={Fonts.DMSansBold}>
            +234
          </CustomText>
          <ChevDown />
        </Row>

        <TextWrap
          placeholder={''}
          keyboardType={inputType}
          onChangeText={
            returnValue
              ? (e: string) => {
                  handleChange(e);
                }
              : handleChange(name)
          }
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
          }}
          value={value}
          widthPercent={66}
        />
      </Wrapper>
      {errors.length > 0 && (
        <View>
          <CustomText
            fontWeight="600"
            top={4}
            left={5}
            fontFamily={Fonts?.DMSansMedium}
            fontSize={13}
            color={Colors.error}>
            {errors}
          </CustomText>
        </View>
      )}
    </Pressable>
  );
};

export const CalendarInput = ({
  bgColor = 'rgba(0,0,0,0)',
  placeholder,
  handleChange = () => {},
  name = '',
  value,
  errors = '',
  marginTop = 0,
  style,
  setFieldTouched = () => {},
  onPress,
}: PasswordProps) => {
  const [focused, setFocused] = useState(false);

  const translateY = useSharedValue(18);
  const animatedIndex = useSharedValue(3);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
      zIndex: animatedIndex?.value,
    };
  });

  useEffect(() => {
    if (errors.length > 0) {
      setFocused(false);
    }
  }, [errors]);

  return (
    <ViewWrap
      bottom={errors.length > 0 ? 16 : 0}
      top={marginTop}
      style={style}
      width="100%">
      <Animated.View style={[animatedStyles, {zIndex: animatedIndex?.value}]}>
        <CustomText
          style={{
            zIndex: 3,
            backgroundColor: 'white',
            alignSelf: 'flex-start',
            paddingHorizontal: 6,
            marginLeft: 9,
          }}
          fontFamily={Fonts.DMSansMedium}
          bottom={4}
          fontSize={focused || value ? 12 : 15}
          fontWeight="700"
          color={Colors?.primary}>
          {placeholder}
        </CustomText>
      </Animated.View>

      <InputWithIcon
        active={focused}
        borderColor={focused ? Colors.primary : Colors.border}
        onPress={() => {
          onPress && onPress();
        }}
        bgColor={bgColor}>
        <PasswordInput
          onChangeText={handleChange(name)}
          autoCapitalize={'none'}
          width="80%"
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
            setFieldTouched(name);
          }}
          value={value}
          editable={false}
        />

        <CalenderIcon />
      </InputWithIcon>
      {errors.length > 0 && (
        <View>
          <CustomText
            fontWeight="600"
            top={3}
            left={5}
            fontFamily={Fonts?.DMSansMedium}
            fontSize={13}
            color={Colors.error}>
            {errors}
          </CustomText>
        </View>
      )}
    </ViewWrap>
  );
};

export const CodeInput = ({mt}: CodeInputProps): JSX.Element => {
  const [enteredText, setEnteredText] = useState<string>('');

  const handleKeyPress = (key: string | number) => {
    setEnteredText(enteredText + key);
  };

  const handleDelete = () => {
    setEnteredText(enteredText.slice(0, -1));
  };

  return (
    <>
      <OtpInputs
        autofillFromClipboard={true}
        editable={false}
        inputStyles={{
          height: 42,
          width: 42,
          borderWidth: 1,
          borderColor: Colors.light_grey,
          borderRadius: 5,
          paddingHorizontal: 15,
          paddingVertical: 12,
          marginRight: 13,
        }}
        focusStyles={{
          height: 42,
          width: 42,
          borderWidth: 1,
          borderColor: Colors.primary,
          borderRadius: 5,
          marginRight: 13,
        }}
        value={enteredText}
        style={{
          margin: 0,
          marginTop: mt,
          flexDirection: 'row',
        }}
        numberOfInputs={6}
        handleChange={() => {}}
      />

      <PhonePadKeyboard
        onKeyPress={(val: string | number) => {
          console.log({val});
          if (val === 'delete') {
            handleDelete();
          } else {
            handleKeyPress('123456');
          }
        }}
      />
    </>
  );
};

export default TextInput;
