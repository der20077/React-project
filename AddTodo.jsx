import { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form
      className="mb-6
    "
      onSubmit={handleSubmit}
    >
      <div className="flex items-center bg-white rounded-lg shadow-sm overflow-hidden border-gray-100 focus-within:ring-2 focus-within:ring-blue-500">
        <input
          className="flex-1 p-3 text-gray-700 dark:bg-page-dark dark:text-txt-dark outline-none placeholder-gray-400"
          type="text"
          value={text}
          placeholder="Добавить задачу ..."
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="p-3 bg-btn-light hover:bg-btn-light-hv text-white dark:bg-btn-dark hover:dark:bg-btn-dark-hv transition-colors duration-300 cursor-pointer"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <path
              d="M4 12H20M12 4V20"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
