import React, { ChangeEvent } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { setSearch } from '../../features/filter/filterSlice';

const Searchbox: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };
  return (
    <div className="search-field group flex-1">
      <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
      <input
        type="text"
        placeholder="Search Job"
        className="search-input"
        id="lws-searchJob"
        onChange={searchHandler}
      />
    </div>
  );
};

export default Searchbox;
