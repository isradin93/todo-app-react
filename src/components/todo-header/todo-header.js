import './todo-header.css';

const TodoHeader = () => {
    return (
        <header className="header">
            <img src="/images/todo-icon.png"
                className="todo-img"
                alt="todo-icon"
            />
            <h1>Todo List</h1>
        </header>
    );
};

export default TodoHeader;