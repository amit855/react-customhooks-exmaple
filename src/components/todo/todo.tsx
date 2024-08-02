import { useState, useEffect } from "react";

function Todo() {

    const [todoList, setTodoList] = useState([]);
    const [todoInput, setTodoInput] = useState('');

    const handleInputChange = (e) => {
        setTodoInput(e.target.value);
    }

    const addTodo = () => {
        setTodoList([...todoList, todoInput]);
        setTodoInput('');
    }

    const handleDelete = (name) => {
        const newList = todoList.filter(list => list !== name);
        setTodoList(newList);
    }


    return (
        <fieldset>
            <legend>TODO Component: </legend>
            <div>
                Add Todo : <input type="text" value={todoInput} onChange={handleInputChange} />
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <ul>
                {
                    todoList && todoList.map(list => (
                        <li>
                            <span>{list}</span>
                            <button onClick={() => handleDelete(list)}>Delete Todo</button>
                        </li>
                    ))
                }
            </ul>
        </fieldset>
    );
}

export default Todo;