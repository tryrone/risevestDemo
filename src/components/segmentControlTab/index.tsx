import React, {useEffect} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  Dimensions,
} from 'react-native';

// Styles;
import Styles from './styles';

interface SegmentControlProps {
  tabs: Array<string>;
  onChange: (arg0: any) => void;
  currentIndex: number | any;
  segmentedControlBackgroundColor?: string;
  paddingVertical?: number | any;
  activeSegmentBackgroundColor?: string;
  activeTextStyle?: TextStyle;
  inactiveTextStyle?: TextStyle;
  badgeTextStyle?: TextStyle;
  badgeValues?: Array<number | null>;
  inactiveBadgeStyle?: ViewStyle;
  activeBadgeStyle?: ViewStyle;
}

const windowWidth = Dimensions.get('window').width;
const width = windowWidth - 82;

const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowOpacity: 0.025,
  shadowRadius: 1,

  elevation: 1,
};

const SegmentControlTab = ({
  tabs,
  onChange,
  currentIndex,
  segmentedControlBackgroundColor,
  paddingVertical,
  activeSegmentBackgroundColor,
  activeTextStyle,
  inactiveTextStyle,
  badgeTextStyle,
  badgeValues = [],
  inactiveBadgeStyle,
  activeBadgeStyle,
}: SegmentControlProps): JSX.Element => {
  const translateValue = (width - 4) / tabs?.length;
  const [tabTranslate] = React.useState(new Animated.Value(0));

  const finalisedActiveTextStyle: TextStyle = {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    color: '#111827',
    ...activeTextStyle,
  };

  const finalisedInActiveTextStyle: TextStyle = {
    fontSize: 15,
    textAlign: 'center',
    color: '#4b5563',
    ...inactiveTextStyle,
  };

  const finalisedActiveBadgeStyle: ViewStyle = {
    backgroundColor: '#27272a',
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
    ...activeBadgeStyle,
  };

  const finalisedInActiveBadgeStyle: ViewStyle = {
    backgroundColor: '#6b7280',
    marginLeft: 4,
    justifyContent: 'center',
    alignItems: 'center',
    ...inactiveBadgeStyle,
  };

  const finalisedBadgeTextStyle: TextStyle = {
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
    color: '#FFFFFF',
    ...badgeTextStyle,
  };

  // useCallBack with an empty array as input, which will call inner lambda only once and memoize the reference for future calls
  const memoizedTabPressCallback = React.useCallback((index: number) => {
    onChange(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Animating the active index based current index
    Animated.spring(tabTranslate, {
      toValue: currentIndex * translateValue,
      stiffness: 180,
      damping: 20,
      mass: 1,
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <Animated.View
      style={[
        Styles.segmentedControlWrapper,
        {
          backgroundColor: segmentedControlBackgroundColor,
        },
        {
          paddingVertical: paddingVertical,
        },
      ]}>
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          {
            position: 'absolute',
            width: (width - 20) / tabs?.length,
            top: 0,
            marginVertical: 5,
            marginHorizontal: 3.5,
            backgroundColor: activeSegmentBackgroundColor,
            borderRadius: 8,
            ...shadowStyle,
          },
          {
            transform: [
              {
                translateX: tabTranslate,
              },
            ],
          },
        ]}
      />
      {tabs.map((tab, index) => {
        const isCurrentIndex = currentIndex === index;
        return (
          <TouchableOpacity
            key={index}
            style={[Styles.touchableContainer]}
            onPress={(): any => memoizedTabPressCallback(index)}
            activeOpacity={0.7}>
            <View style={Styles.textWrapper}>
              <Text
                style={[
                  isCurrentIndex
                    ? finalisedActiveTextStyle
                    : finalisedInActiveTextStyle,
                ]}>
                {tab}
              </Text>
              {badgeValues[index] && (
                <View
                  style={[
                    Styles.defaultBadgeContainerStyle,
                    isCurrentIndex
                      ? finalisedActiveBadgeStyle
                      : finalisedInActiveBadgeStyle,
                  ]}>
                  <Text style={finalisedBadgeTextStyle}>
                    {badgeValues[index]}
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
};

SegmentControlTab.defaultProps = {
  tabs: [],
  onChange: (): void => {},
  currentIndex: 0,
  segmentedControlBackgroundColor: '#E5E5EA',
  activeSegmentBackgroundColor: 'white',
  textColor: '#333',
  activeTextColor: '#fff',
  paddingVertical: 12,
};

export default SegmentControlTab;
