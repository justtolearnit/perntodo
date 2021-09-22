import React, { Fragment, useEffect, useState } from 'react';

export default function ListTodo() {

    const [todos, setTodo] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch('http://localhost:5000/todos');
            const jsonData = await response.json();

            setTodo(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);
    console.log(todos);

    return (
        <Fragment>
            <table>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {todos.map((todo)=>{
                    return(
                    <tr key={todo.todo_id}>
                    <td>{todo.description}</td>
                    <td>Edit</td>
                    <td>Delete</td>
                    </tr>)
                })}
            </table>
        </Fragment>
    )
}
