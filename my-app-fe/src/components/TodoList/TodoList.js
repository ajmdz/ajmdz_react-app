import React from 'react';
import TodoCreate from '../TodoCreate/TodoCreate';
import TodoItem from '../TodoItem/TodoItem';

function TodoList(props) {
    return (
        <>
        <main>
            <div class="w-50 mx-auto mt-2">
                <div class="card card-shadow py-3">
                <TodoCreate />
                <hr />
                <div class="container-fluid">
                    <div class="row">
                       <TodoItem /> 
                    
                    </div>
                </div>
                </div>
            </div>
        </main>  
        </>
    );
}

export default TodoList;