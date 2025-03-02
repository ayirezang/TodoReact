import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const AddTodo = ({ handleAddTask }) => {
  const [input, setInput] = useState("");
  const handleTaskChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      //empty task
      alert("cannot be empty!");
      return;
    }
    let newTask = { task: input, id: uuid() };
    handleAddTask(newTask); //add input to the list directly

    setInput("");
  };

  return (
    <div className=" ">
      <h1 className="ml-50 mb-10 font-extrabold text-4xl"> TO DO APP</h1>

      <div className="flex  justify-center items-center">
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            placeholder="Add task"
            className="w-[400px] border p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            value={input}
            onChange={handleTaskChange}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            type="submit"
            // onClick={handleSubmit}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
