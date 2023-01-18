import {
  ACTION_TODO_ADD,
  ACTION_TODO_UPDATE,
  ACTION_TODO_DELETE,
  ACTION_TODO_EDIT,
  ACTION_TODO_STATUS_CHANGE,
  ACTION_TODO_FETCH,
  ACTION_LOADING,
  ACTION_ERROR,
} from "../actions/todo";

const DEFAULT_TODO = { done: false };
const INITIAL_STATE = {
  todo: DEFAULT_TODO,
  loading: false,
  error: '',
  todoList: [],
};

export default function rootReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ACTION_LOADING: return { ...state, loading: payload };
    case ACTION_ERROR: return { ...state, error: payload };
    case ACTION_TODO_FETCH: return { ...state, todoList: payload };
    case ACTION_TODO_ADD: return {
      ...state,
      todoList: [...state.todoList, payload],
    };
    case ACTION_TODO_DELETE: return {
      ...state,
      todoList: state.todoList.filter(todo => todo.id !== payload),
    };
    case ACTION_TODO_EDIT: return { ...state, todo: payload };
    case ACTION_TODO_UPDATE: return {
      ...state,
      todoList: state.todoList.map(todo => todo.id === payload.id ? payload : todo),
      todo: DEFAULT_TODO,
    };
    case ACTION_TODO_STATUS_CHANGE: return {
      ...state,
      todoList: state.todoList.map(todo => todo.id === payload ? {
        ...todo,
        done: !todo.done,
      } : todo),
    };
    default: return state;
  }
}