import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import FilterTasks from './components/FilterTasks';
import './index.css';

const App = () => {
  return (
    <div>
      <h1>TODO</h1>
      <AddTask />
      <FilterTasks />
      <ListTask />
    </div>
  );
};

export default App;