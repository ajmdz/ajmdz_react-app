import { combineReducers } from 'redux';
import { setTodosReducers } from './todoReducer';
const reducers = combineReducers({
    allTodos:setTodosReducers
});
export default reducers;