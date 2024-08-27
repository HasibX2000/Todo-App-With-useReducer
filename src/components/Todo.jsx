import React from "react";
import DeleteIcon from "../assets/trash.png";
import CheckIcon from "../assets/check.png";

// Todo component to display a single todo item
export default function Todo({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="bg-gray-600 p-3 flex justify-between items-center flex-col gap-2 sm:flex-row">
      <div className="space-y-1">
        {/* Todo title with conditional styling */}
        <h2
          className={`text-2xl font-semibold text-center sm:text-start ${
            todo.completed ? "text-gray-400 line-through" : "text-green-500"
          }`}
        >
          {todo.title}
        </h2>
        {/* Todo description */}
        <p className="text-gray-300 text-center sm:text-start">
          {todo.description}
        </p>
      </div>
      <div className="space-x-3">
        {/* Button to toggle the completion status of the todo */}
        <button
          className={`p-2 hover:bg-gray-800 duration-150 ${
            todo.completed ? "bg-green-100" : "bg-gray-500"
          }`}
          onClick={toggleTodo}
        >
          <img src={CheckIcon} alt="CheckIcon" className="w-4" />
        </button>
        {/* Button to delete the todo */}
        <button
          className="bg-gray-500 p-2 hover:bg-gray-800 duration-150"
          onClick={deleteTodo}
        >
          <img src={DeleteIcon} alt="DeleteIcon" className="w-4" />
        </button>
      </div>
    </div>
  );
}
