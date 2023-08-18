
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "./TodosStore";
import '../css/TodosStyle.css';


function TaskList() {
  const tasks = useSelector(state => state);
  const dispatch = useDispatch();
  let notNullTask = false;
  if (tasks.length > 0) {
    notNullTask = true;
  }

  return (
    <div className="task-list-div">
      <h2 className="header-task-list">Task list</h2>
      <div className="hor-line"></div>
      <ol>
        { notNullTask ? tasks.map(task => (
          <li key={task.id} className="li">
            <div className="checkbox-text-div">
            <input
              type="checkbox"
              className="checkbox"
              checked={task.isCompleted}
              onChange={() => dispatch(toggleTask(task.id))}
            />
            {task.isCompleted ? 
            <strike><span className="task-text" onClick={() => dispatch(toggleTask(task.id))}>{task.text}</span></strike> 
            : <span  className="task-text" onClick={() => dispatch(toggleTask(task.id))}>{task.text}</span> }

            </div>
            <button className='button' onClick={() => dispatch(deleteTask(task.id))}>
              Delete
            </button>
          </li>
        )) : <h4>You did not add any tasks yet(</h4>}
      </ol>
      <div className="hor-line"></div>
    </div>
  );
}

export default TaskList;
