const initialValue = {
  todos: [
    { id: 1, value: "Buy Milk", completed: false, isEdit: false },
    { id: 2, value: "Buy Egg", completed: false, isEdit: false },
    { id: 3, value: "Buy T-Shirt", completed: false, isEdit: false },
  ],
  todosView: [],
};

function todoReducer(state = initialValue, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: Date.now(),
        value: action.payload,
        completed: false,
        isEdit: false,
      };
      const cloneTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: cloneTodos, 
      };

    case "DELETE_TODO":
      const filterTodo = state.todos.filter((item) => item.id != action.payload);
      return {
        ...state,
        todos: filterTodo
      };

    case "EDIT_TODO":
      const editedTodoId = action.payload.id;
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === editedTodoId) {
          return {
            id: todo.id,
            value: todo.value,
            completed: todo.completed,
            isEdit: !todo.isEdit,
          };
        } else {
          return todo;
        }
      });

      return {
        ...state,
        todos: updatedTodos,
      };

    case "EDIT_BODY_TODO":
      const id = action.payload.id;
      const inputValue = action.payload.value;
      const isEdit = action.payload.isEdit;
      const editTodo = state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            value: inputValue,
            completed: todo.completed,
            isEdit: isEdit,
          };
        } else {
          return todo;
        }
      });

      return {
        ...state,
        todos: editTodo,
      };

    case "EDIT_STATUS_TODO":
      const todoId = action.payload;
      const editTodoStatus = state.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            id: todo.id,
            value: todo.value,
            completed: !todo.completed,
            isEdit: todo.isEdit,
          };
        } else {
          return todo;
        }
      });

      return {
        ...state,
        todos: editTodoStatus,
      };

    case "GET_ACTIVE_TODO":
      const activeTodo = state.todos.filter((todo) => !todo.completed);
      return {
        ...state,
        todosView: activeTodo,
      };

    case "GET_COMPLETE_TODO":
      const completeTodo = state.todos.filter((todo) => todo.completed)
      return {
        ...state,
        todosView: completeTodo
      }

    case "GET_ALL_TODO":
      return {
        ...state,
        todosView: state.todos
      }

    case "SET_TODOS_VIEW":
      return {
        ...state,
        todosView: action.payload
      }

    default:
      return state;
  }
}

export default todoReducer;
