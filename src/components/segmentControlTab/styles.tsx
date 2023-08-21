import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const width = windowWidth - 82;

const styles = StyleSheet.create({
  segmentedControlWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    width: width,
    justifyContent: 'center',
    marginVertical: 10,
  },
  textStyles: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'inter-bold',
  },
  touchableContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 9,
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 9,
  },
  movingSegmentStyle: {
    top: 0,
    marginVertical: 2,
    marginHorizontal: 2,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
  },
  // Badge Styles
  defaultBadgeContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 16,
    width: 16,
    borderRadius: 9999,
    alignContent: 'flex-end',
  },
});

export default styles;
