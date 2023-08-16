import { combineReducers } from '@reduxjs/toolkit';
import todosReducer from './TodosStore';
import usersReducer from './UsersStore';

const rootReducer = combineReducers({

    todos: todosReducer,
    usersInfo: usersReducer,

});

export default rootReducer;

