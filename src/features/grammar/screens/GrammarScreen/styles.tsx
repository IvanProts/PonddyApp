import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  contentWrapper: {flex: 1, backgroundColor: '#F5F5F5', padding: 16},
  lessonName: {marginBottom: 8, color: '#969CA0'},
  segmentsWrapper: {
    width: '100%',
    backgroundColor: '#FFF',
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  topWrapper: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 25,
  },
  item: {padding: 8, borderRadius: 8, marginRight: 3},
  chosenItem: {
    borderWidth: 1,
    borderColor: '#3F98D1',
  },
  chosenItemDisabled: {
    opacity: 0.3,
  },
  disabledItem: {
    color: '#C0C4C6',
  },
  segmentStyle: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '400',
  },
  paddingVertical: {paddingVertical: 14},
  sentencesTrans: {color: '#969CA0'},
  keyWordsWrapper: {
    paddingTop: 15,
    paddingBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  keyWordsText: {fontSize: 14, color: '#969CA0'},
});
