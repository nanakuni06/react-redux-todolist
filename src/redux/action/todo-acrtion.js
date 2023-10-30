export function addTodo(input) {
    return {
      type: "ADD_TODO",
      payload: input,
    };
}