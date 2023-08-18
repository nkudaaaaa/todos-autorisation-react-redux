import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './TodosStore';
import '../css/TodosStyle.css';


function AddTaskForm() {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

const handleAddTaskFromInput = (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    if (taskText.trim() !== '' && taskText.trim().length <= 15) {
      dispatch(addTask({ id: Date.now(), text: taskText, completed: false }));
      setTaskText('');
      return;
    }
    alert('You should enter not null task and not bigger than 15 symbols');
    setTaskText('');
  };

const handleAddTask = () => {
    if (taskText.trim() !== '' && taskText.trim().length <= 15) {
      dispatch(addTask({ id: Date.now(), text: taskText, completed: false }));
      setTaskText('');
      return;
    }
    alert('You should enter not null task and not bigger than 15 symbols');
  };

  return (
    <div className='add-task-div'>
      <h2 className='header-add-form'>Add a task</h2>
      <div className="add-task-flexbox">
        <input
          type="text"
          className='input'
          value={taskText}
          onChange={e => setTaskText(e.target.value)}
          onKeyDown={handleAddTaskFromInput}
        />
        <button className='button' onClick={handleAddTask}>Add</button>
      </div>
    </div>
  );
}

export default AddTaskForm;
