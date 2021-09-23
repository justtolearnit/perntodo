import React, { Fragment, useEffect, useState } from 'react';
import UpdateTodo from './UpdateTodo';

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

    const deleteHandler = async (id) => {
        try {
            await fetch(`http://localhost:5000/todos/${id}`,
            {
                method:"DELETE"
            });
            setTodo(todos.filter(todo => todo.todo_id !== id))
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
            <table>
                <tbody>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    {todos.map((todo) => {
                        return (
                            <tr key={todo.todo_id}>
                                <td>{todo.description}</td>
                                <td><UpdateTodo todo={todo} /></td>
                                <td><button onClick={() => deleteHandler(todo.todo_id)}>Delete</button></td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </Fragment>
    )
}
