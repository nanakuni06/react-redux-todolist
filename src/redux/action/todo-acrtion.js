export function addTodo(input) {
    return {
      type: "ADD_TODO",
      payload: input,
    };
}

export function deleteTodo(id) {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
}

export function editTodo(id) {
  return {
    type: "EDIT_TODO",
    payload: {
      id,
    },
  };
}