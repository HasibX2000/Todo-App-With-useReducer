import React, { useState } from "react";

// InsertData component to handle adding new todos
export default function InsertData({ addTodo }) {
  // State variables for title and description
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Check if both fields are filled
    if (title.trim() && description.trim()) {
      addTodo(title, description); // Call addTodo with the title and description
      setTitle(""); // Clear the title input field
      setDescription(""); // Clear the description input field
    }
  };

  return (
    <form
      className="w-full gap-3 md:gap-10 flex flex-col md:flex-row mb-10"
      onSubmit={handleSubmit} // Attach handleSubmit to form submission
    >
      {/* Title input field */}
      <input
        type="text"
        placeholder="Enter todo title"
        className="px-3 py-2 w-full focus:outline-none"
        value={title} // Controlled component
        onChange={(e) => setTitle(e.target.value)} // Update state on change
      />
      {/* Description input field */}
      <input
        type="text"
        placeholder="Enter todo description"
        className="px-3 py-2 w-full focus:outline-none"
        value={description} // Controlled component
        onChange={(e) => setDescription(e.target.value)} // Update state on change
      />
      {/* Submit button */}
      <button
        type="submit" // Form submission button
        className="px-3 py-2 text-center text-gray-200 bg-green-500 min-w-fit"
      >
        Add todo
      </button>
    </form>
  );
}
