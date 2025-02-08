import { useState } from "react";
import { v4 as uuid } from "uuid";

const EditTodo = ({ handleAddTask, task }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const [input, setInput] = useState("eee");
  const handleTaskChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newTask = { task: input, id: uuid() };
    handleAddTask(newTask); //add input to the list directly
    // setTasks((prev) => [...prev, newTask]);
    setInput("");
  };
  return (
    <>
      {/* <button */}
      {/* className="p-2 bg-yellow-500 text-white rounded-md" */}
      {/* onClick={openModal} */}
      {/* > */}
      {/* edit */}
      {/* </button> */}
      {isOpen && (
        <dialog
          id="my_modal_2"
          className="modal bg-white p-6 rounded shadow-lg w-80"
          open
        >
          <div className="modal-box">
            <h3 className="text-lg font-semibold mb-4">Edit Tasks!</h3>
            <p className="py-4"></p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Add task"
              className="border p-2 rounded outline-none"
              value={input}
              onChange={handleTaskChange}
            />
            <div className="flex justify-end gap-2">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                type="submit"
              >
                Add
              </button>
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded"
                type="submit"
                onClick={closeModal}
              >
                close
              </button>
            </div>
          </form>
        </dialog>
      )}
    </>
  );
};

export default EditTodo;
