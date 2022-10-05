import {Segment} from '../../types/enteties';
import BottomSheet from '@gorhom/bottom-sheet';

export type SelectedItemType = {
  isItemSelected: boolean;
};

export type AudioButtonType = {
  onPress: () => void;
};

export type LevelSectionType = {
  chosenItem?: any;
};

export type AnchorType = {
  isPositionAbsolute?: boolean;
};

export type BottomSheetType = {
  chosenItem?: Segment;
  play: () => void;
  bottomRef: React.Ref<BottomSheet>;
  itemInfo?: any;
};
