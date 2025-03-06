import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

const TaskForm = ({ taskToEdit }) => {
  const { addTask, updateTask } = useTasks();
  const [name, setName] = useState(taskToEdit ? taskToEdit.name : '');
  const [description, setDescription] = useState(taskToEdit ? taskToEdit.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    if (taskToEdit) {
      updateTask({ ...taskToEdit, name, description });
    } else {
      addTask({ id: Date.now(), name, description, completed: false });
    }

    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom de la tâche"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">{taskToEdit ? 'Mettre à jour' : 'Ajouter'} la tâche</button>
    </form>
  );
};

export default TaskForm;