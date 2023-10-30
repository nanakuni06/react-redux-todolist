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
    default:
    return state;
    }
}
      
export default todoReducer;