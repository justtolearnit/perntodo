import React, { Fragment } from 'react';
import { useState } from 'react';

export default function InputTodo() {

    const [description, setDescription] = useState()

    return (
        <Fragment>
            <input type='text' value={description}
                onChange={e => setDescription(e.target.value)}
            ></input>
            <button>Add</button>
        </Fragment>
    )
}
