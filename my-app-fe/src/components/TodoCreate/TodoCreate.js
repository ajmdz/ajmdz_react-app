import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTodos } from '../../redux/actions/todoAction';

function TodoCreate() {
    const [todoTitle, setTodoTitle] = useState('');
    const [todoDescription, setTodoDescription] = useState('');
    const allTodos = useSelector((state) => state.allTodos.todos)
    const singleTodo = useSelector((state) => state.singleTodo)
    const dispatch = useDispatch();

    const addTodo = () => {
        const newTodo = [...allTodos];

        newTodo.push({
            id:Math.floor(Math.random() * 20000),
            title: todoTitle,
            description: todoDescription
        });

        // Pag tapos na yung todo, kailangan nang ibalik/ipasa sa kabila
        dispatch(setTodos(newTodo));
    }

    useEffect(() => {
        //para mawala yung error sa unang load pag walang laman yung singleTodo
        if (singleTodo.title != null) {
            setTodoTitle(singleTodo.title);
            setTodoDescription(singleTodo.description);
        }
    }, [singleTodo]);

    return (
        <>
         <div className="container-fluid">
            <div className="row">
            <div className="col-12">
                <h1>Todo List</h1>
            </div>
            <div className="col-12">
                <div className="form-group">
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={todoTitle}
                    onChange={(e) => setTodoTitle(e.target.value)}
                    className="form-control"
                    placeholder="Enter title"
                />
                </div>
            </div>
            <div className="col-12 mt-1">
                <div className="form-group">
                <input
                    type="text"
                    name="description"
                    id="description"
                    value={todoDescription}
                    onChange={(e) => setTodoDescription(e.target.value)}
                    className="form-control"
                    placeholder="Enter description"
                />
                </div>
            </div>
            <div className="col-12 mt-2 d-flex justify-content-end">
                <button onClick={() => addTodo()} className="btn btn-primary">ADD</button>
            </div>
            </div>
        </div>   
        </>
    );
}

export default TodoCreate;