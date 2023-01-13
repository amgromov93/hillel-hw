import {
  ACTION_TODO_ADD,
  ACTION_TODO_DELETE,
  ACTION_TODO_CHANGE_STATUS,
} from "../actions/todo";

const INITIAL_STATE = {
  todoList: [
    {
      title: "tenetur distinctio dolore",
      done: true,
      id: "2",
    },
    {
      title: "ab repellendus voluptatem",
      done: true,
      id: "3",
    },
    {
      title: "rerum sit perspiciatis",
      done: false,
      id: "4",
    },
    {
      title: "omnis recusandae repellendus",
      done: true,
      id: "5",
    },
    {
      title: "perspiciatis aut illum",
      done: true,
      id: "6",
    },
    {
      title: "quod nesciunt voluptate",
      done: false,
      id: "7",
    },
    {
      title: "illum autem nostrum",
      done: true,
      id: "8",
    },
    {
      title: "assumenda commodi saepe",
      done: true,
      id: "9",
    },
    {
      title: "alias nostrum repellendus",
      done: false,
      id: "10",
    },
    {
      title: "non eum et",
      done: true,
      id: "11",
    },
    {
      title: "reprehenderit eligendi placeat",
      done: true,
      id: "12",
    },
    {
      title: "similique voluptatum reprehenderit",
      done: false,
      id: "13",
    },
    {
      title: "quaerat illum quo",
      done: true,
      id: "14",
    },
    {
      title: "animi tempore eos",
      done: false,
      id: "15",
    },
    {
      title: "occaecati praesentium facere",
      done: false,
      id: "16",
    },
    {
      title: "distinctio maiores similique",
      done: true,
      id: "17",
    },
  ],
};

export default function rootReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ACTION_TODO_ADD:
      return { ...state, todoList: [...state.todoList, payload] };
    case ACTION_TODO_DELETE:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== payload),
      };
    case ACTION_TODO_CHANGE_STATUS:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === payload ? { ...todo, done: !todo.done } : todo
        ),
      };
    default:
      return state;
  }
}
