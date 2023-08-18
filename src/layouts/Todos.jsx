import TaskList from '../features/TaskList';
import AddTaskForm from '../features/AddTaskForm';
import { Provider } from 'react-redux';
import storeTodos from '../features/TodosStore';
import '../css/TodosStyle.css'

function Todos() {

    return (
    <Provider store={storeTodos}>
        <div className="todos-div">
            <TaskList />
            <AddTaskForm />
        </div>
      </Provider>
    )
}
export default Todos;
