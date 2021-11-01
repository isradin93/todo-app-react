import React, { useState, useMemo } from 'react'
import TodoForm from '../todo-form/todo-form';
import Todo from '../todo/todo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [select, setSelect] = useState('all');
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const filteredTodos = useMemo(() => {
        return todos.filter(item => {
            switch (select) {
                case 'completed': return item.isCompleted;
                case 'uncompleted': return !item.isCompleted;
                default: return item;
            }
        })
    }, [select, todos]);

    // Add todo
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    // Update todo
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    // Remove todo
    const onRemove = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    };

    const onCompleted = id => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updateTodos);
    };

    const JSXTodos = filteredTodos.map((todo, index) => (edit.id === todo.id
        ? <TodoForm edit={edit} onSubmit={submitUpdate} />
        : <Todo todo={todo}
            setTodos={setTodos}
            setEdit={setEdit}
            onCompleted={onCompleted}
            onRemove={onRemove}
            updateTodo={updateTodo}
            key={index}
        />))

    return (
        <>
            <TodoForm
                setTodos={setTodos}
                onSubmit={addTodo}
                setSelect={setSelect}
            />
            {JSXTodos}
        </>
    );
}

export default TodoList;
