import TodoApi from "./TodoApi";

export const ACTION_LOADING = 'ACTION_LOADING';
export const ACTION_ERROR = 'ACTION_ERROR';
export const ACTION_TODO_FETCH = 'ACTION_TODO_FETCH';
export const ACTION_TODO_ADD = 'ACTION_TODO_ADD';
export const ACTION_TODO_DELETE = 'ACTION_TODO_DELETE';
export const ACTION_TODO_UPDATE = 'ACTION_TODO_UPDATE';
export const ACTION_TODO_EDIT = 'ACTION_TODO_EDIT';
export const ACTION_TODO_STATUS_CHANGE = 'ACTION_TODO_STATUS_CHANGE';


export function fetchTodo() {
  return (dispatch) => {
    dispatch({ type: ACTION_LOADING, payload: true });

    TodoApi.getList()
      .then((list) => {
        dispatch({ type: ACTION_TODO_FETCH, payload: list });
        dispatch({ type: ACTION_LOADING, payload: false });
      })
      .catch((e) => {
        dispatch({ type: ACTION_ERROR, payload: e?.message });
      })
  };
}

export function addTodo(payload) {
  return (dispatch) => {
    TodoApi.create(payload).then(() => {
      dispatch({ type: ACTION_TODO_ADD, payload });
    })
  };
}

export function deleteTodo(payload) {
  return (dispatch) => {
    TodoApi.delete(payload).then(() => {
      dispatch({ type: ACTION_TODO_DELETE, payload });
    })
  };
}

export function updateTodo(payload) {
  return (dispatch) => {
    TodoApi.update(payload.id, payload).then(() => {
      dispatch({ type: ACTION_TODO_UPDATE, payload });
    })
  };
}

export function statusChangeTodo(payload) {
  return { type: ACTION_TODO_STATUS_CHANGE, payload };
}

export function editTodo(payload) {
  return { type: ACTION_TODO_EDIT, payload };
}