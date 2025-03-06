import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector((state) => {
    if (state.tasks.filter === 'done') {
      return state.tasks.tasks.filter(task => task.isDone);
    } else if (state.tasks.filter === 'notDone') {
      return state.tasks.tasks.filter(task => !task.isDone);
    } else {
      return state.tasks.tasks;
    }
  });

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default ListTask;