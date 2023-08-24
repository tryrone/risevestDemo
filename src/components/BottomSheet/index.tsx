/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  Animated,
  Modal,
  Dimensions,
  ScrollView,
  ViewStyle,
  Pressable,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components/native';

const {height, width} = Dimensions.get('screen');

const ContentWrapper = styled.View`
  width: 100%;
  background-color: white;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  padding-bottom: 70px;
`;

const FullContainer = styled.View`
  height: ${height}px;
  width: ${width}px;
  flex: 1;
  justify-content: flex-end;
`;

type BottomSheetProps = {
  isOpen?: boolean;
  children: JSX.Element;
  close?: (() => void) | undefined;
};

const BottomSheet = ({
  isOpen = false,
  children,
  close = () => {},
}: BottomSheetProps) => {
  const translateY = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    if (isOpen) {
      Animated.timing(translateY, {
        toValue: 20,
        delay: 50,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isOpen]);

  const BlackBg = ({close}: any) => {
    const blackbgStyle: ViewStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'black',
      opacity: 0.5,
      height: '100%',
      width: '100%',
    };
    return <Pressable onPress={close} style={blackbgStyle} />;
  };

  const closeModal = () => {
    Animated.timing(translateY, {
      toValue: height,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      close();
    }, 600);
  };

  return (
    <Modal
      visible={isOpen}
      transparent={true}
      onTouchCancel={closeModal}
      onDismiss={closeModal}>
      <FullContainer>
        <BlackBg close={() => closeModal()} />
        <Animated.View
          style={{
            transform: [{translateY}],
            width: '100%',
            alignSelf: 'flex-end',
          }}>
          <ContentWrapper>
            <ScrollView
              style={{width: '100%'}}
              showsVerticalScrollIndicator={false}>
              {children}
            </ScrollView>
          </ContentWrapper>
        </Animated.View>
      </FullContainer>
    </Modal>
  );
};

export default BottomSheet;
