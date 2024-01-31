import React from "react";
import TodoActivity from "./TodoActivity";
import {IoClose } from "react-icons/io5";

const TodoList = ({ todos, setTodos }) => {

  const removeAllItems = () => {
    setTodos([]);
  };

  const removeItem = (itemToRemove) => {
    const newTodos = todos.filter((item) => {
      return item.todoItem !== itemToRemove;
    });
    setTodos(newTodos);
    console.log(setTodos);
  };

  return (
    <div>
      <ul>
        {todos.map((item, index) => (
          <div
            key={index}
            className="flex relative gap-x-2 border-b-2 border-gray-800 
            py-2 items-center"
          >
            <button 
              className="border-2 rounded-full border-red-700 p-2"
            >
            </button>
            <li className="bg-red-500">{item.todoItem}</li>
            <button
              onClick={() => removeItem(item.todoItem)}
              className="absolute end-0 hover:text-xl"
            >
              <IoClose />
            </button>
          </div>
        ))}
      </ul>
      <div className="flex gap-x-6 justify-between">
        <span>{todos.length} items left</span>
        <TodoActivity />
        <div
          className="hover:underline cursor-pointer"
          onClick={removeAllItems}
        >
          Clear Completed
        </div>
      </div>
    </div>
  );
};
export default TodoList;
