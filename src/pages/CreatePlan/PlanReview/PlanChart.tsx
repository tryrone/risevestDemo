import React from 'react';
import {Dimensions, Animated, StyleSheet} from 'react-native';
import LineChart from '../../../components/LineChart';

export const {width: SIZE} = Dimensions.get('window');

const CARD_HEIGHT = 325;

const PlanChart = () => {
  return (
    <Animated.View style={styles.graphCard}>
      <LineChart />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  graphCard: {
    // elevation: 5,
    borderRadius: 20,
    height: CARD_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
  },
});

export default PlanChart;
