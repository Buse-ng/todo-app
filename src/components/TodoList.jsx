import React, { useEffect, useState } from "react";
import TodoActivity from "./TodoActivity";
import { IoCheckmark, IoClose } from "react-icons/io5";

const TodoList = ({ todos, setTodos }) => {
  const [completed, setCompleted] = useState([]);

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

  const markAsCompleted = (todoItem) => {
    const completedItem = todos.find(item => item.todoItem === todoItem);

    if(completedItem) {
      if(!completed.includes(completedItem)){
        setCompleted([...completed, completedItem]);
      }
      else{
        const newCompleteList = completed.filter((item) => item.todoItem !== todoItem);
        setCompleted(newCompleteList);
      }
    }
  }

  useEffect(() => {
    const activeItems= (todos.filter((item)=> !completed.includes(item)))
    console.log("completed:", completed);
    console.log("activeItems:", activeItems);
  }, [completed]);

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
              onClick={ () => markAsCompleted(item.todoItem)}
            >
              {
                completed.find((compItem) => compItem.todoItem === item.todoItem) 
                ? (<IoCheckmark />) 
                : null
              }
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
        <TodoActivity completed={completed} />
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
