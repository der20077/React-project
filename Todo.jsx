import { useReducer, useState } from "react";
import { initialState } from "../reducers/todoReducer.js";
import { todoReducer } from "../reducers/todoReducer.js";

const Todo = () => {
  const [state, dispath] = useReducer(todoReducer, initialState);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispath({ type: "ADD_TODO", payload: text });
      setText("");
    }
  };

  return (
    <div>
      <h1>Список задач</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Введите текст задачи"
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
        <button type="submit">Добавить задачу</button>
      </form>
      <ol>
        {state.todos.map((todo) => (
          <li
            style={{
              textDecoration: todo.comlited ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => dispath({ type: "TOOGGLE_TODO", payload: todo.id })}
            key={todo.id}
          >
            {todo.text}
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Todo;
