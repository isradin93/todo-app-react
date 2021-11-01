import TodoHeader from "../todo-header/todo-header";
import TodoList from "../todo-list/todo-list";

import './app.css';

const App = () => {
    return (
        <div className="todo-app">
            <TodoHeader />
            <TodoList />
        </div>
    );
};

export default App;