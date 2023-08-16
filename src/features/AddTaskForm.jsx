import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './store';

function AddTaskForm() {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask({ id: Date.now(), text: taskText, completed: false }));
      setTaskText('');
    }
  };

  return (
    <div>
      <h2>Добавить задачу</h2>
      <input
        type="text"
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Добавить</button>
    </div>
  );
}

export default AddTaskForm;
