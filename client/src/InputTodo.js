import React, { Fragment } from 'react';
import { useState } from 'react';

export default function InputTodo() {

    const [description, setDescription] = useState("")

    const submitHandler = async e =>{
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(
                'http://localhost:5000/todos',
                {
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(body)
                });
        console.log(response)
            
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
            <form onSubmit={submitHandler}>
            <input type='text' value={description}
                onChange={e => setDescription(e.target.value)}
            ></input>
            <button type='submit'>Add</button>
            </form>
        </Fragment>
    )
}
