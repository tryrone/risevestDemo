import React, {useMemo, useState} from 'react';
import {LineGraph} from 'react-native-graph';
import {StyleSheet} from 'react-native';
import {generateRandomGraphData} from '../../constants/Data';
import {hapticFeedback} from '../../utils/HapticFeedback';
import {SelectionDot} from '../CustomSelectionDot';
import {HapticFeedbackTypes} from 'react-native-haptic-feedback';
import Colors from '../../constants/Colors';

const POINT_COUNT = 70;
const POINTS = generateRandomGraphData(POINT_COUNT);
const GRADIENT_FILL_COLORS = ['#7476df5D', '#7476df4D', '#7476df00'];

const LineChart = () => {
  const [points] = useState(POINTS);

  const [isAnimated] = useState(true);
  const [enablePanGesture] = useState(true);
  const [enableFadeInEffect] = useState(false);

  const [enableCustomSelectionDot] = useState(true);

  const [enableGradient] = useState(false);
  const [enableRange] = useState(false);
  const [enableIndicator] = useState(true);
  const [indicatorPulsating] = useState(false);

  const highestDate = useMemo(
    () =>
      points.length !== 0 && points[points.length - 1] != null
        ? points[points.length - 1]!.date
        : undefined,
    [points],
  );

  const range: any | undefined = useMemo(() => {
    // if range is disabled, default to infinite range (undefined)
    if (!enableRange) {
      return undefined;
    }

    if (points.length !== 0 && highestDate != null) {
      return {
        x: {
          min: points[0]!.date,
          max: new Date(highestDate.getTime() + 50 * 1000 * 60 * 60 * 24),
        },
        y: {
          min: -200,
          max: 200,
        },
      };
    } else {
      return {
        y: {
          min: -200,
          max: 200,
        },
      };
    }
  }, [enableRange, highestDate, points]);

  return (
    <LineGraph
      style={styles.graph}
      animated={isAnimated}
      color={Colors.primary}
      points={points}
      gradientFillColors={enableGradient ? GRADIENT_FILL_COLORS : undefined}
      enablePanGesture={enablePanGesture}
      enableFadeInMask={enableFadeInEffect}
      onGestureStart={() =>
        hapticFeedback({type: HapticFeedbackTypes.impactLight})
      }
      SelectionDot={enableCustomSelectionDot ? SelectionDot : undefined}
      range={range}
      enableIndicator={enableIndicator}
      horizontalPadding={enableIndicator ? 15 : 0}
      indicatorPulsating={indicatorPulsating}
    />
  );
};

const styles = StyleSheet.create({
  graph: {
    alignSelf: 'center',
    width: '100%',
    aspectRatio: 1.4,
    marginVertical: 20,
  },
});

export default LineChart;
