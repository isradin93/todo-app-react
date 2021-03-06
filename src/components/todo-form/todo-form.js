import React, { useState, useEffect, useRef } from 'react'

import './todo-form.css';

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    // Auto focus on input
    const inputFocus = useRef(null);

    useEffect(() => {
        inputFocus.current.focus();
    });

    // Change input
    const handleChange = e => {
        setInput(e.target.value);
    };

    // Prevent default submit value in form
    const handleSubmit = e => {
        e.preventDefault()

        // Generate key
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            isCompleted: false
        });

        // Clear input
        setInput('');
    };

    return (
        <form autoComplete="off" onSubmit={handleSubmit} className='todo-form'>
            {props.edit ? (
                <>
                    <input
                        autoComplete="off"
                        placeholder='Update your item'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        ref={inputFocus}
                        className='todo-input edit'
                    />
                    <button onClick={handleSubmit} className='todo-button edit'>
                        Update
                    </button>
                </>
            ) : (
                <>
                    <input
                        placeholder='Add a todo'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        className='todo-input'
                        ref={inputFocus}
                    />
                    <button onClick={handleSubmit}
                        className='todo-button'>
                        Add todo
                    </button>
                </>
            )}
            {
                !props.edit && <select
                    onChange={(e) => props.setSelect(e.target.value)}
                    className="select">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            }
        </form>
    );
}

export default TodoForm;
