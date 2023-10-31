
import React, { useState } from 'react';
function TodoList() {
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addList = () => {
        if (inputValue.trim() !== '') {
            setList([...list, inputValue]);
            setInputValue('');
        }
    }

    const removeItem = (index) => {
        const filteredItem = list.filter((_, i) => i !== index);
        setList(filteredItem);
    }


    return (
        <div>
            <br />
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addList}>Add List</button>
            <h2>List of Items</h2>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}
                        <button onClick={() => removeItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default TodoList;




