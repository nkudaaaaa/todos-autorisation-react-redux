
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "./TodosStore";


function TaskList() {
  const tasks = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Список задач</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => dispatch(toggleTask(task.id))}
            />
            {task.text}
            <button onClick={() => dispatch(deleteTask(task.id))}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
