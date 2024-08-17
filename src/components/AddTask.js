import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (taskDescription.trim()) {
      dispatch(addTask(taskDescription));
      setTaskDescription('');
    } else {
      alert('Task description cannot be empty');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="New task description"
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;
