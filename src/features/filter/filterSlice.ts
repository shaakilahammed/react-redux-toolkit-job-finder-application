import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterState } from '../../types/Filter';

const initialState: FilterState = {
  type: '',
  search: '',
  sort: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setType(state, action: PayloadAction<string>) {
      state.type = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { setType, setSearch, setSort } = filterSlice.actions;
