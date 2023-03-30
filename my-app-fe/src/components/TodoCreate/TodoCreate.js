import React from 'react';

function TodoCreate() {
    return (
        <>
         <div class="container-fluid">
            <div class="row">
            <div class="col-12">
                <h1>Todo List</h1>
            </div>
            <div class="col-12">
                <div class="form-group">
                <input
                    type="text"
                    name="title"
                    id="title"
                    class="form-control"
                    placeholder="Enter title"
                />
                </div>
            </div>
            <div class="col-12 mt-1">
                <div class="form-group">
                <input
                    type="text"
                    name="description"
                    id="description"
                    class="form-control"
                    placeholder="Enter description"
                />
                </div>
            </div>
            <div class="col-12 mt-2 d-flex justify-content-end">
                <button class="btn btn-primary">ADD</button>
            </div>
            </div>
        </div>   
        </>
    );
}

export default TodoCreate;