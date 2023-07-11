import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterState } from '../../types/Filter';

const initialState: FilterState = {
  search: '',
  sort: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { setSearch, setSort } = filterSlice.actions;
