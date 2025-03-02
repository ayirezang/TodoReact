import { useState } from "react";
import { v4 as uuid } from "uuid";

const EditTodo = ({ handleAddTask, updateTask, task }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState(task.task);
  const handleTaskChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTask = { task: input, id: uuid() };
    // handleAddTask(newTask); //add input to the list directly
    updateTask(task.id, { task: input });
    setIsOpen("false");
  };

  const handlEditSubmit = (e) => {
    e.preventDefault();
    editTask(task.id, input);
    setIsOpen(false);
    let newTasks = { task: task };
    let mergedTasks = { ...task, ...handlEditSubmit };
    editTask(newTasks, mergedTasks);
  };

  return (
    <div className=" relative flex ">
      <button
        className="px-2 py-2 bg-orange-500 text-white rounded-md"
        onClick={() => setIsOpen(true)}
      >
        edit
      </button>
      {isOpen && (
        <div
          className="absolute top-full left-0 -translate-x-[391px] mt-10 w-[590px] bg-white p-4 shadow-lg rounded-md "
          open
        >
          <div className="modal-box  ">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => setIsOpen(true)}
              ></button>
            </form>
            <h3 className="font-bold text-lg">Edit Task!</h3>
            <form onSubmit={handleSubmit} className="flex ">
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
            <button
              className="mt-2 text-white bg-blue-500 px-2 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default EditTodo;
