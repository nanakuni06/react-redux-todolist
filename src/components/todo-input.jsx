import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/action/todo-acrtion'

function TodoInput() {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === "") {
          setError(true);
          setTimeout(() => setError(false), 3000);
        } else {
          setError(false);
          dispatch(addTodo(input));
          setInput("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <div className="flex my-5 gap-x-4">
            <input
            id="todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What to do"
            className="px-2 py-1 w-full border-solid border-black border-2 rounded-md bg-slate-50"
            />
            <button type="submit" className="px-4 py-2 border-solid border-black border-2 rounded-lg bg-blue-400 hover:bg-blue-500">Add</button>
        </div>
        {error && <div className="text-red-500 font-semibold">Error! Todo is empty.</div>}
        </form>
    );
    }

export default TodoInput