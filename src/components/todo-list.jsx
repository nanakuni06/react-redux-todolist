import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, editBodyTodo, editStatusTodo, editTodo, setTodosView } from '../redux/action/todo-acrtion';
import { IconPencil } from '@tabler/icons-react';
import { IconTrashXFilled } from '@tabler/icons-react';

function TodoList() {
  const { todos, todosView } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id) => {
    dispatch(editTodo(id));
  };

  const handleEditBody = (value, id, isEdit) => {
    dispatch(editBodyTodo(value, id, isEdit));
  };

  const handleStatus = (id) => {
    dispatch(editStatusTodo(id));
  };

  useEffect(() => {
    dispatch(setTodosView(todos));
  }, [todos]);

  return (
    <div className="flex flex-col">
      {Array.isArray(todosView) &&
        todosView.map((todo) => (
          <div key={todo.id} className="flex flex-row justify-between px-5 py-1 shadow-lg rounded-xl bg-violet-500 border items-center m-1 ">
            {!todo.isEdit && (
              <div className="flex w-full justify-between shadow-sm">
                <label className="flex px-2 py-2 gap-x-4 flex-1 justify-start">
                  <input
                    id={`checkbox-${todo.id}`}
                    type="checkbox"
                    className="border-2 rounded-xl cursor-pointer"
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
              <div className="flex w-full justify-between">
                <input
                  type="text"
                  placeholder="Type here"
                  className="px-2 py-1 m-1 w-full border-solid border-2 rounded-md bg-slate-50 "
                  value={todo.value}
                  onChange={(e) => {
                    handleEditBody(e.target.value, todo.id, true);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleEditBody(e.target.value, todo.id, false);
                    }
                  }}
                  autoFocus="autofocus"
                />
                <button onClick={() => handleEdit(todo.id)} className="px-2 py-1 m-2 text-sm border-solid border-black border-2 rounded-lg bg-blue-400 hover:bg-blue-500">
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