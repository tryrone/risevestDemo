import React, {useRef, useState} from 'react';
import SafeAreaWrap from '../../components/SafeAreaWrap';
import Colors from '../../constants/Colors';
import {Animated, Dimensions, FlatList, View} from 'react-native';
import {ONBOARDING_DATA} from '../../constants';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import CustomText from '../../components/CustomText';
import styled from 'styled-components/native';
import {BackArrow, RightArrow} from '../../assets/svgs';
import Button from '../../components/Button';

const {width, height} = Dimensions.get('window');

type OnboardingSlideData = {
  item: {
    key?: string;
    title: string;
    description: string;
    img: any;
    bgColor: string;
    mainColor: string;
  };
  index?: number;
};

const ButtonWrap = styled.TouchableOpacity`
  height: 48px;
  background-color: ${Colors.light_grey_2};
  border-radius: 5px;
  padding-horizontal: 16px;
  align-items: center;
  flex-direction: row;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 57px;
  width: 100%;
`;

const Onboarding = () => {
  const flatListRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState<number | any>(0);

  const keyExtractor = React.useCallback(
    (_: any, index: number) => index.toString(),
    [],
  );

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const scrollToIndex = (index: number) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({index: index, animated: true});
    }
  };

  const handleMomentumScrollEnd = (event: any) => {
    const {contentOffset} = event.nativeEvent;
    const index = Math.round(contentOffset.x / width);

    setActiveIndex(index);
  };

  const renderItem = ({item}: OnboardingSlideData): JSX.Element => {
    return (
      <SafeAreaWrap
        bg={item.bgColor}
        style={{paddingHorizontal: 20, alignItems: 'center', width}}
        safeAreaBg={item.bgColor}>
        <item.img />
      </SafeAreaWrap>
    );
  };

  const renderBottomButtons = (): JSX.Element => {
    if (activeIndex !== ONBOARDING_DATA.length - 1) {
      return (
        <Row>
          <ButtonWrap onPress={() => scrollToIndex(activeIndex - 1)}>
            <BackArrow
              style={{
                color:
                  activeIndex === 0
                    ? Colors.grey_arrow
                    : ONBOARDING_DATA?.[activeIndex]?.mainColor,
              }}
            />
          </ButtonWrap>

          <ButtonWrap onPress={() => scrollToIndex(activeIndex + 1)}>
            <CustomText
              fontSize={15}
              fontWeight="700"
              color={ONBOARDING_DATA?.[activeIndex]?.mainColor}>
              Next
            </CustomText>
            <RightArrow
              style={{
                color: ONBOARDING_DATA?.[activeIndex]?.mainColor,
                marginLeft: 20,
              }}
            />
          </ButtonWrap>
        </Row>
      );
    } else {
      return (
        <View style={{position: 'relative', top: 40}}>
          <Button
            text="Sign Up"
            bgColor={Colors.primary}
            textColor={Colors.white}
            textSize={15}
            fontWeight="700"
          />
          <Button
            text="Sign In"
            style={{marginTop: 10}}
            bgColor={Colors.light_grey_2}
            textColor={Colors.primary}
            textSize={15}
            fontWeight="700"
          />
        </View>
      );
    }
  };

  return (
    <>
      <FlatList
        data={ONBOARDING_DATA}
        ref={flatListRef}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        pagingEnabled
        horizontal
        decelerationRate={'normal'}
        scrollEventThrottle={16}
        renderItem={renderItem}
        scrollEnabled={false}
      />
      <ExpandingDot
        data={ONBOARDING_DATA}
        expandingDotWidth={8}
        scrollX={scrollX}
        inActiveDotOpacity={0.6}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          marginHorizontal: 5,
          bottom: height * 0.54,
        }}
        activeDotColor={ONBOARDING_DATA?.[activeIndex]?.mainColor}
        inActiveDotColor={Colors.light_grey}
        containerStyle={{}}
      />

      <View
        style={{
          position: 'absolute',
          bottom: '15%',
          paddingHorizontal: 20,
          width: '100%',
        }}>
        <CustomText
          fontSize={20}
          fontWeight="500"
          color={ONBOARDING_DATA?.[activeIndex]?.mainColor}>
          {ONBOARDING_DATA?.[activeIndex]?.title}
        </CustomText>
        <CustomText
          top={12}
          fontSize={15}
          fontWeight="400"
          color={Colors.black}>
          {ONBOARDING_DATA?.[activeIndex]?.description}
        </CustomText>

        {renderBottomButtons()}
      </View>
    </>
  );
};

export default Onboarding;
