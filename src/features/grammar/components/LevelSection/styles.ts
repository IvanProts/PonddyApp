import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  contentBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginBottom: 14,
  },
  buttonContainer: {
    width: 48,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4E900',
    borderRadius: 4,
    marginRight: 8,
  },
  lvlText: {fontSize: 12, fontWeight: '700', color: '#FFF'},
  posText: {marginRight: 8, fontSize: 16, fontWeight: '700'},
  wordText: {marginRight: 8, color: '#D5D7D9'},
  word: {fontSize: 16, fontWeight: '500', color: '#576168'},
  translationText: {fontSize: 14, fontWeight: '600'},
});
