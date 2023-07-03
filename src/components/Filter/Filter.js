import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter, selectFilter } from '../contactSlice';
// import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = (event) => {
    dispatch(updateFilter(event.currentTarget.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
};