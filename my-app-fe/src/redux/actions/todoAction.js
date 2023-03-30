import { ActionTypes } from "../constants/action-type"

export const setTodos = (todos) => {
    return {
        type: ActionTypes.SET_TODO,
        payload:todos
    };
}

export const setSingleTodo = (todos) => {
    return {
        type: ActionTypes.SINGLE_TODO,
        payload:todos
    };
}