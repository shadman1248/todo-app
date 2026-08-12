import { useState } from "react";
import "./TodoList.css"; 

export default function TodoList() {
    // Added isDone: false to the initial state
    let [todos, setTodos] = useState([{ task: "sample-task", id: crypto.randomUUID(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        if (!newTodo.trim()) return; // Prevents adding empty tasks
        
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: crypto.randomUUID(), isDone: false }];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        // Fixed: Used prevTodos instead of todos to ensure state updates reliably
        setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id));
    };

    let markAllDone = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => ({ ...todo, isDone: true }))
        );
    };

    let markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isDone: true };
                } else return todo;
            })
        );
    };

    return (
        <div className="todo-container">
            <h1 className="todo-title">Task Master</h1>

            <div className="input-group">
                <input
                    className="todo-input"
                    placeholder="What needs to be done?"
                    value={newTodo}
                    onChange={updateTodoValue}
                    onKeyDown={(e) => e.key === 'Enter' && addNewTask()} // Added Enter key support
                />
                <button className="btn btn-primary" onClick={addNewTask}>Add</button>
            </div>

            <div className="list-header">
                <h2>Your Tasks</h2>
                {todos.length > 0 && (
                    <button className="btn btn-text" onClick={markAllDone}>Mark All Done</button>
                )}
            </div>

            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className={`todo-item ${todo.isDone ? 'completed' : ''}`}>
                        <span className="task-text">
                            {todo.task}
                        </span>
                        
                        <div className="action-buttons">
                            {!todo.isDone && (
                                <button className="btn btn-success" onClick={() => markAsDone(todo.id)}>
                                    ✓ Done
                                </button>
                            )}
                            <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
                                ✕ Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
