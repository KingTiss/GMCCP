import React from 'react';
import { useTasks } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { updateTask, deleteTask, toggleTaskCompletion } = useTasks();

  const handleToggleCompletion = () => {
    toggleTaskCompletion(task.id);
  };

  const handleDelete = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
      deleteTask(task.id);
    }
  };

  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span onClick={handleToggleCompletion}>
        {task.name}
      </span>
      <button onClick={handleDelete}>Supprimer</button>
      <button onClick={() => updateTask({ ...task, name: 'New Name' })}>Modifier</button>
    </li>
  );
};

export default TaskItem;