import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, editTodo } from '../redux/action/todo-acrtion';

function TodoList() {
   const { todos, todosView } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id) => {
    dispatch(editTodo(id));
  };

  return (
    <div className="flex flex-col">
      {Array.isArray(todosView) &&
        todosView.map((todo) => (
          <div key={todo.id} className="form-control flex flex-col justify-between items-center border p-2">
            {!todo.isEdit && (
              <div className="flex w-full justify-between">
                <label className="label cursor-pointer flex px-2 gap-x-4 flex-1 justify-start">
                  <input
                    id={`checkbox-${todo.id}`}
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    onChange={() => handleStatus(todo.id)}
                    checked={todo.completed}
                  />
                  <span className={`label-text break-all ${todo.completed && "line-through"}`}>{todo.value}</span>
                </label>
                <div className="flex items-center px-2 gap-x-4">
                  <IconPencil onClick={() => handleEdit(todo.id)} className="cursor-pointer" />
                  <IconTrashXFilled onClick={() => handleDelete(todo.id)} className="cursor-pointer" />
                </div>
              </div>
            )}
            {todo.isEdit && (
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-full focus:outline-none"
                  value={todo.value}
                  autoFocus="autofocus"
                />
                <button onClick={() => handleEdit(todo.id)} className="btn">
                  Update
                </button>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default TodoList