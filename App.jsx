import { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

function App() {
  const onDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const getInishialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme:dark)",
    ).matches;

    if (savedTheme) {
      return savedTheme;
    } else if (prefersDark) {
      return "dark";
    } else {
      const hours = new Date().getHours();
      return hours < 6 || hours >= 21 ? "dark" : "light";
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const initialTodos = [
    { id: 1, text: "Изучить React", completed: false },
    { id: 2, text: "Сделать проект", completed: false },
    { id: 3, text: "Выучить Tailwind", completed: true },
  ];

  const onAdd = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
    };
    setTodos([...todos, newTodo]);
  };

  const [todos, setTodos] = useState(initialTodos);
  const [theme, setTheme] = useState(getInishialTheme());

  return (
    <div
      data-theme={theme}
      className="flex flex-col justify-center items-center bg-page-light dark:bg-page-dark p-6 min-h-screen"
    >
      <div className="mb-6">
        <div className="flex items-center cursor-pointer">
          <button className="relative" onClick={toggleTheme}>
            <div className="bg-gray-300 shadow-inner rounded-full w-14 h-7 transition-colors duration-300 dark:bg-btn-dark">
              <div className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 translate-x-0 dark:translate-x-7"></div>
            </div>
          </button>
          <span className="ml-3 text-gray-700 dark:text-gray-300 font-medium">
            {theme == "light" ? "Светлая" : "Тёмная"}
          </span>
        </div>
      </div>
      <div className="mx-auto flex flex-col gap-3">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            My Todo App
          </span>
        </h1>
        <AddTodo onAdd={onAdd} />
        <div className="flex flex-col gap-3">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
