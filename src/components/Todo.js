import React from "react";

const Todo = () => {

    const todos = [
        {body: 'Learn React Fundamentals', done: true},
        {body: 'Build a TODOs App', done: false},
        {body: 'Build a Game', done: false},
    ];

    return (
        <div>

            <header>TODO List</header>

            <ul>
                {todos.map(todo =>
                    <li>{todo.body}</li>)}


            </ul>

        </div>
    )

}
export default Todo