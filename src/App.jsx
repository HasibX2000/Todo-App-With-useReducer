import React, { useReducer, useEffect, useState } from "react";
import InsertData from "./components/InsertData";
import TodoList from "./components/TodoList";

// Initial state with some demo todos
const initialState = {
  todos: [
    {
      id: 1,
      title: "Grocery Shopping",
      description: "Buy fruits, vegetables, and dairy.",
      completed: false,
    },
    {
      id: 2,
      title: "Workout Session",
      description: "Go to the gym for a cardio workout.",
      completed: true,
    },
    {
      id: 3,
      title: "Read a Book",
      description: "Finish reading 'The Great Gatsby'.",
      completed: false,
    },
    {
      id: 4,
      title: "Doctor's Appointment",
      description: "Visit the dentist for a check-up.",
      completed: true,
    },
    {
      id: 5,
      title: "Clean the House",
      description: "Tidy up the living room and kitchen.",
      completed: false,
    },
  ],
};

// Reducer function to handle different actions
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      // Add a new todo to the list
      const newTodo = { ...action.payload, id: Date.now() };
      const updatedTodos = [...state.todos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return { ...state, todos: updatedTodos };

    case "TOGGLE_TODO":
      // Toggle the completed status of a todo
      const toggledTodos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(toggledTodos));
      return { ...state, todos: toggledTodos };

    case "DELETE_TODO":
      // Remove a todo from the list
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      localStorage.setItem("todos", JSON.stringify(filteredTodos));
      return { ...state, todos: filteredTodos };

    case "SET_TODOS":
      // Set the todos from localStorage
      return { ...state, todos: action.payload };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const App = () => {
  // Set up state and reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Load todos from localStorage if available
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      dispatch({ type: "SET_TODOS", payload: savedTodos });
    }
  }, []);

  // Handler to add a new todo
  const handleAddTodo = (title, description) => {
    dispatch({
      type: "ADD_TODO",
      payload: { title, description, completed: false },
    });
  };

  // Handler to toggle the completion status of a todo
  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  // Handler to delete a todo
  const handleDeleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  // Handler to change the filter type
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Filter todos based on the selected filter
  const filteredTodos = state.todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true; // "all" or default
  });

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-0 py-10">
        <h1 className="text-center text-white text-3xl mb-5 font-semibold">
          My Todo App
        </h1>
        <div className="bg-gray-700 p-10">
          {/* InsertData component to add new todos */}
          <InsertData addTodo={handleAddTodo} />
          <div className="mb-5">
            {/* Filter buttons to switch between all, completed, and pending todos */}
            <button
              className={`py-2 px-3 font-medium ${
                filter === "all" ? "bg-green-500" : "bg-gray-500"
              } text-gray-200`}
              onClick={() => handleFilterChange("all")}
            >
              All
            </button>
            <button
              className={`py-2 px-3 font-medium ${
                filter === "completed" ? "bg-green-500" : "bg-gray-500"
              } text-gray-200`}
              onClick={() => handleFilterChange("completed")}
            >
              Completed
            </button>
            <button
              className={`py-2 px-3 font-medium ${
                filter === "pending" ? "bg-green-500" : "bg-gray-500"
              } text-gray-200`}
              onClick={() => handleFilterChange("pending")}
            >
              Pending
            </button>
          </div>
          {/* TodoList component to display the filtered todos */}
          <TodoList
            todos={filteredTodos}
            toggleTodo={handleToggleTodo}
            deleteTodo={handleDeleteTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
