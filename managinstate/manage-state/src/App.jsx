import React, { useState } from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css'; 

const App = () => {
  const [taskToEdit, setTaskToEdit] = useState(null);

  return (
    <TaskProvider>
      <div>
        <h1>Liste de Tâches</h1>
        <TaskForm taskToEdit={taskToEdit} />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;