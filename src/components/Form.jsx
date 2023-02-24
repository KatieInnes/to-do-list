import React, { useState } from 'react';

const Form = (props) => {
    const { toDo, setToDo } = props;

    const [ listItem, setListItem ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setToDo( [...toDo, listItem])
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" name="toDoItem"
                onChange={ (e) => setListItem(e.target.value) }
            />
            <button>Add</button>
        </form>
    )
}

export default Form
