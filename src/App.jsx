import React from "react";
import AddTodo from "./components/AddTodo";
import { useState } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  function deleteTask(id) {
    setTasks(tasks.filter((tasks) => tasks.id !== id)); //deleting task
  }
  // function updatedTask(id, taskUpdated) {
  // setCont(
  // cont.map((task) => {
  // if (task.id === id) {
  // return taskUpdated;
  // } else {
  // return task;
  // }
  // })
  // );
  // }

  return (
    <div className="min-h-screen  flex flex-col justify-center items-center bg-gray-100 py-10    ">
      <div className="w-[600px] bg-white shadow-lg rounded-lg p-6">
        <AddTodo handleAddTask={handleAddTask} deleteTask={deleteTask} />
        <TodoList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default App;
