import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  dotContainer: {
    width: 112,
    height: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 24,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#EBF2F5',
  },
  activeDot: {
    backgroundColor: '#6ACFED',
  },
});
