import React from "react";

export default function InsertData() {
  return (
    <form className="w-full gap-3 md:gap-10 flex flex-col md:flex-row mb-10">
      <input
        type="text"
        placeholder="Enter todo title"
        className="px-3 py-2 w-full focus:outline-none"
      />
      <input
        type="text"
        placeholder="Enter todo description"
        className="px-3 py-2 w-full focus:outline-none"
      />
      <button className="px-3 py-2 text-center text-gray-200 bg-green-500 min-w-fit">
        Add todo
      </button>
    </form>
  );
}
