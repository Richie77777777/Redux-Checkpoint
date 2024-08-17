import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/actions';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    dispatch(editTask(task.id, { description: newDescription }));
    setIsEditing(false);
  };

  return (
    <div style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{task.description}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={handleToggle}>
        {task.isDone ? 'Mark Not Done' : 'Mark Done'}
      </button>
    </div>
  );
};

export default Task;
