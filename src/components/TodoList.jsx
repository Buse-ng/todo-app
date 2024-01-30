import React from "react";
import TodoActivity from "./TodoActivity";

const TodoList = ({ todos }) => {

  return (
    <div>
      <ul>
        {todos.map((item, index) => (
            <div key={index} className="flex gap-x-2 border-b-2 border-gray-800 py-2 items-center">
                <button 
                    className="border-2 rounded-full border-red-700 p-2">
                </button>
                <li 
                   
                    className="bg-red-500"
                >
                    {item.todoItem}
                </li>
            </div>
        ))}
      </ul>
      <div className="flex gap-x-6">
        <span>
            {todos.length} items left
        </span>
        <TodoActivity /> 
      </div>
    </div>
  );
};
export default TodoList;
