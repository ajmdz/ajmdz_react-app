import React from 'react';

function TodoItem() {
    return (
        <>
            <div class="col-12 d-flex justify-content-around mt-1">
                <div class="w-100 ms-1">
                    <h3 class="text-start">Todo 1</h3>
                    <p class="text-start">This is todo 1</p>
                </div>
                <button class="btn btn-success">EDIT</button>
                <button class="btn btn-danger mx-1">DELETE</button>
                <button class="btn btn-primary">COMPLETE</button>
            </div>   
        </>
    );
}

export default TodoItem;