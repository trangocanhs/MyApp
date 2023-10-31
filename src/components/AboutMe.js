import React, { useState } from 'react';
function AboutMe() {
    return (
        <div>
            <h1>Trần Thị Ngọc Ánh</h1>
        </div>
    );
}

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, newTodo]);
        setNewTodo('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            <div>
                <h2 class="text-center">List of items</h2>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default AboutMe;

