import {View, SafeAreaView, ViewStyle} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import KeyboardShift from 'components/KeyboardAvoidingView';

type SafeAreaProp = {
  children: React.ReactNode;
  style?: ViewStyle;
  bg?: string;
  height?: string;
  width?: string;
  safeAreaBg?: string;
};

const SafeAreaWrap = ({
  children,
  style,
  bg = Colors.white,
  height = '100%',
  width = '100%',
  safeAreaBg = Colors.white,
}: SafeAreaProp): JSX.Element => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: safeAreaBg,
        flex: 1,
      }}>
      <KeyboardShift>
        <View
          style={{
            backgroundColor: bg,
            height,
            width,
            ...style,
          }}>
          {children}
        </View>
      </KeyboardShift>
    </SafeAreaView>
  );
};

export default SafeAreaWrap;
