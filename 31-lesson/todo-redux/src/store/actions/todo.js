export const ACTION_TODO_ADD = "ACTION_TODO_ADD";
export const ACTION_TODO_DELETE = "ACTION_TODO_DELETE";
export const ACTION_TODO_CHANGE_STATUS = "ACTION_TODO_CHANGE_STATUS";

export function addTodo(payload) {
  return { type: ACTION_TODO_ADD, payload };
}

export function deleteTodo(id) {
  return { type: ACTION_TODO_DELETE, payload: id };
}

export function changeTodo(id) {
  return { type: ACTION_TODO_CHANGE_STATUS, payload: id };
}
