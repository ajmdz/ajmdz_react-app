import React from 'react';
import { useSelector } from 'react-redux';

function TodoItem() {
    const allTodos = useSelector((state) => state.allTodos.todos)
    console.log(allTodos)
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
                            <button className="btn btn-success">edit</button>
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