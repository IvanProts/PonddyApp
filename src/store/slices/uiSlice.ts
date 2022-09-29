import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {reducerNames} from '../../helpers/constants';
import {UIState} from '../../types/states';

const uiState: UIState = {
  showStatusBar: false,
};

export const uiSlice = createSlice({
  name: reducerNames.ui,
  initialState: uiState,
  reducers: {
    isStatusBarVisible(state, action: PayloadAction<boolean>) {
      state.showStatusBar = action.payload;
    },
  },
});

export default uiSlice.reducer;
