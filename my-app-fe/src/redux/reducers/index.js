import { combineReducers } from 'redux';
import { setSingleTodoReducers, setTodosReducers } from './todoReducer';
const reducers = combineReducers({
    allTodos:setTodosReducers,
    singleTodo:setSingleTodoReducers,
});
export default reducers;