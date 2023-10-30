import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, editBodyTodo, editStatusTodo, editTodo, setTodosView } from '../redux/action/todo-acrtion';
// import { IconPencil, IconTrashXFilled } from '@tabler/icons-react';

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
          <div key={todo.id} className="form-control flex flex-col justify-between items-center border p-2 my-3 shadow-lg rounded-xl bg-violet-600 text-white">
            {!todo.isEdit && (
              <div className="flex w-full justify-between ">
                <label className="label cursor-pointer flex px-2 gap-x-4 flex-1 justify-start">
                  <input
                    id={`checkbox-${todo.id}`}
                    type="checkbox"
                    className="checkbox checkbox-success bg-white"
                    onChange={() => handleStatus(todo.id)}
                    checked={todo.completed}
                  />
                  <span className={`label-text break-all ${todo.completed && "line-through"} text-white`}>{todo.value}</span>
                </label>
                <div className="flex items-center px-2 gap-x-4">
                  <div onClick={() => handleEdit(todo.id)} className="cursor-pointer" />
                  <div onClick={() => handleDelete(todo.id)} className="cursor-pointer" />
                </div>
              </div>
            )}
            {todo.isEdit && (
              <div className="flex w-full gap-2">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-full focus:outline-none text-black"
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
                <button onClick={() => handleEdit(todo.id)} className="btn bg-white border-black">
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