import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../features/tasks/taskSlice';

const FilterTasks = () => {
  const dispatch = useDispatch();

  return (
    <div className="filters">
      <button onClick={() => dispatch(setFilter('all'))}>All</button>
      <button onClick={() => dispatch(setFilter('done'))}>Done</button>
      <button onClick={() => dispatch(setFilter('notDone'))}>Not Done</button>
    </div>
  );
};

export default FilterTasks;