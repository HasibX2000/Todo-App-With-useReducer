import React from "react";
import InsertData from "./components/InsertData";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-0 py-10">
        <h1 className="text-center text-white text-3xl mb-5 font-semibold">
          My Todo App
        </h1>
        <div className="bg-gray-700 p-10">
          <div>
            <InsertData />
            <div className="mb-5">
              <button className="py-2 px-3 text-gray-200 font-medium bg-green-500">
                To Do
              </button>
              <button className="py-2 px-3 text-gray-200 font-medium bg-slate-500">
                Completed
              </button>
            </div>
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
