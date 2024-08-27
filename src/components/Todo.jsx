import React from "react";
import EditIcon from "../assets/edit.png";
import DeleteIcon from "../assets/trash.png";
import CheckIcon from "../assets/check.png";

export default function Todo() {
  return (
    <div className="bg-gray-600 p-3 flex justify-between items-center flex-col gap-2 sm:flex-row">
      <div className="space-y-1">
        <h2 className="text-green-500 text-2xl font-semibold text-center sm:text-start">
          Todo Title
        </h2>
        <p className="text-gray-300 text-center sm:text-start">
          Todo Description
        </p>
      </div>
      <div className="space-x-3">
        <button className="bg-gray-500 p-2 hover:bg-gray-800 duration-150">
          <img src={EditIcon} alt="EditIcon" className="w-4" />
        </button>
        <button className="bg-gray-500 p-2 hover:bg-gray-800 duration-150">
          <img src={CheckIcon} alt="CheckIcon" className="w-4" />
        </button>
        <button className="bg-gray-500 p-2 hover:bg-gray-800 duration-150">
          <img src={DeleteIcon} alt="DeleteIcon" className="w-4" />
        </button>
      </div>
    </div>
  );
}
