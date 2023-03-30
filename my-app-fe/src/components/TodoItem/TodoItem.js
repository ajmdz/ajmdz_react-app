import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleTodo } from '../../redux/actions/todoAction';

function TodoItem() {
    const allTodos = useSelector((state) => state.allTodos.todos)
    const singleTodo = useSelector((state) => state.singleTodo);

    const dispatch = useDispatch();
    console.log(singleTodo);
    console.log(allTodos);

    const editTodo = index => {
        const newTodo = [...allTodos];
        const todo = newTodo.at(index);
        
        // create object for todo item
        const single = {
            id: todo.id,
            title: todo.title,
            description: todo.description
        }
        dispatch(setSingleTodo(single));
        /* then kailangan magrefresh pagkapindot ng edit
            kaya gagamit ng useEffect
        */
    }

    // refresh pag nagbago yung singleTodo
    useEffect(() => {
        console.log(singleTodo)
    }, [singleTodo]); 

    return (
        <>
            {
                allTodos.map((todo,index) => {
                    return (
                        <div key={index} className="col-12 d-flex justify-content-around mt-1">
                            <div className="w-100 ms-1">
                                <h3 className="text-start">{ todo.title }</h3>
                                <p className="text-start">{ todo.description }</p>
                            </div>
                            <button onClick={() => editTodo(index)} className="btn btn-success">edit</button>
                            <button className="btn btn-danger mx-1">delete</button>
                            <button className="btn btn-primary">complete</button>
                        </div> 
                    ) 
                })
            }
             
        </>
    );
}

export default TodoItem;