import { ActionTypes } from "../constants/action-type";

const initialState = {
    todos:[
        {
            id: 1,
            title: "Eat Breakfast",
            description: "Eat breakfast at 9am"
        },
        {
            id: 2,
            title: "Eat Lunch",
            description: "Eat lunch at 12pm"
        },
        {
            id: 3,
            title: "Eat Dinner",
            description: "Eat dinner at 9pm"
        },
    ]
}

export const setTodosReducers = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_TODO:
            return { ...state, todos: payload }
        default:
            return state;
    }
}