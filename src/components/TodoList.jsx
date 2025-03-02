import React from "react";
import EditTodo from "./EditTodo";

const TodoList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <div className="flex  flex-col justify-center items-center gap-4 w-full mt-5  ">
      {tasks.map((task) => {
        return (
          <div
            key={task.id}
            className="flex items-center w-[400px] gap-3  pb-2   "
          >
            <input type="checkbox" className="w-8 h-8 text-3xl " />
            <p className="flex-1 text-3xl text-center ">{task.task}</p>
            <div className="flex ">
              <EditTodo task={task} updateTask={updateTask} />

              <button
                className="px-2 py-2 bg-red-500 text-white rounded-md"
                onClick={() => deleteTask(task.id)}
              >
                delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
