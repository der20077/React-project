export const initialState = {
  todos: [],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            comlited: false,
          },
        ],
      };

    case "TOOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, comlited: !todo.comlited }
            : todo,
        ),
      };

    default:
      return state;
  }
};
