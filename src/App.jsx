import React from "react";
import AddTodo from "./components/AddTodo";
import { useState } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  function deleteTask(id, newTask) {
    setTasks(tasks.filter((tasks) => tasks.id !== id)); //deleting task
  }
  function updateTask(id, newTask) {
    const editedTask = tasks.map((task) =>
      task.id === id ? { ...task, task: newTask.task } : task
    );
    setTasks(editedTask); //  setting the updated task list
  }

  return (
    <div className="min-h-screen  flex flex-col justify-center items-center bg-gray-100 py-10    ">
      <div className="w-[600px] bg-white shadow-lg rounded-lg p-6">
        <AddTodo
          handleAddTask={handleAddTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
        <TodoList
          tasks={tasks}
          deleteTask={deleteTask}
          handleAddTask={handleAddTask}
          updateTask={updateTask}
        />
      </div>
    </div>
  );
};

export default App;
