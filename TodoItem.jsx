import { useState } from "react";

const TodoItem = ({ todo, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className=" group flex items-center justify-between p-3 gap-3 bg-white dark:bg-page-dark rounded-l h-12 shadow-sm hover:shadow-md transition-shadow duration-300 border-gray-100">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsCompleted(!isCompleted)}
          className={`p-1 rounded-full border-2 ${isCompleted ? "border-green-500 bg-green-500" : "border-gray-300 hover:border-gray-400"} transition-colors duration-300`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4  w-4 ${isCompleted ? "text-white" : "text-transparent"}`}
            viewBox="0 0 1024 1024"
            fill="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth={2}
              d="M760 380.4l-61.6-61.6-263.2 263.1-109.6-109.5L264 534l171.2 171.2L760 380.4z"
            ></path>
          </svg>
        </button>
        <span
          className={`tex-1 ${isCompleted ? "line-through  text-gray-400" : "text-gray-700 dark:text-gray-300"}`}
        >
          {" "}
          {todo.text}
        </span>
      </div>
      <button
        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all duration-300"
        onClick={() => onDelete(todo.id)}
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </button>
    </div>
  );
};

export default TodoItem;
