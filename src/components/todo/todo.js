import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { BsCheck2Circle } from 'react-icons/bs'

import './todo.css';

const Todo = ({ todo, onCompleted, onRemove, setEdit, setTodos }) => {

    const onChecked = (todo) => () => {
        console.log(todo)
        setTodos(prev => prev.map(item => item.id === todo.id ?
            { ...todo, isCompleted: !todo.isCompleted } : item));
    };

    const onEditHandler = () => {
        setEdit({ id: todo.id, value: todo.text })
    };

    const onRemoveHandler = () => {
        onRemove(todo.id);
    };

    return <div
        className={todo.isCompleted ? 'todo-row _completed' : 'todo-row'}
    >
        <div key={todo.id} onClick={() => onCompleted(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
            <BsCheck2Circle
                className={todo.isCompleted ? 'checked-icon _completed' : 'checked-icon'}
                onClick={onChecked(todo)} />
            <RiCloseCircleLine
                onClick={onRemoveHandler}
                className='delete-icon'
            />
            <TiEdit
                onClick={onEditHandler}
                className='edit-icon'
            />
        </div>
    </div>
}

export default Todo;
