import React, { ChangeEvent } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { setSort } from '../../features/filter/filterSlice';

const FilterSelectbox: React.FC = () => {
  const dispatch = useAppDispatch();
  const sortHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSort(e.target.value));
  };
  return (
    <select
      id="lws-sort"
      name="sort"
      autoComplete="sort"
      className="flex-1"
      onChange={sortHandler}
    >
      <option value="">Default</option>
      <option value="lth">Salary (Low to High)</option>
      <option value="htl">Salary (High to Low)</option>
    </select>
  );
};

export default FilterSelectbox;
