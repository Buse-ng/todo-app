import React, { useEffect, useState } from "react";
import TodoActivity from "./TodoActivity";
import { IoCheckmark, IoClose } from "react-icons/io5";

const TodoList = ({ todos, setTodos }) => {
  const [completed, setCompleted] = useState([]);
  const [filter, setFilter] = useState("all");

  const removeCompletedItems = () => {
    const removeAll=todos.filter(item=>!completed.includes(item));
    setTodos(removeAll);
    setCompleted([]);
  };

  const removeItem = (itemToRemove) => {
    const newTodos = todos.filter((item) => {
      return item.id !== itemToRemove;
    }
    );
    setTodos(newTodos);
    if(completed.length !== 0){
      markAsCompleted(itemToRemove);
    }
  };

  const isCompletedItem = (todoId) => {
    return completed.find((compItem) => compItem.id === todoId) !== undefined;
  };

  const markAsCompleted = (todoId) => {
    const completedItem = todos.find(item => item.id === todoId);

    if(completedItem) {
      if(!completed.includes(completedItem)){
        setCompleted([...completed, completedItem]);
      }
      else{
        const newCompleteList = completed.filter((item) => item.id !== todoId);
        setCompleted(newCompleteList);
      }
    }
  }

  const getActiveItemsList = () => {
    return todos.filter((item) => !isCompletedItem(item.id));
  };

  useEffect(() => {
    console.log("completed:", completed);
    console.log("activeItemsList:", getActiveItemsList());
  }, [completed]);
  
  const filterTodos= () => {
    switch(filter){
      case "active":
        return getActiveItemsList();
      case "completed":
        return completed;
      default:
        return todos;
    }
  }

  return (
    <div>
      <ul>
        {filterTodos().map((item, index) => (
          <div
            key={index}
            className="flex relative gap-x-2 border-b border-gray-200 
            py-4 items-center"
          >
            <button 
              className="border rounded-full border-gray-200 p-3"
              onClick={ () => markAsCompleted(item.id)}
            >
              <span>
                {
                  isCompletedItem(item.id)  
                  ? (<IoCheckmark className="text-green-500 text-2xl" />) 
                  : null
                }
              </span>
            </button>

            <li 
              onClick={() => textEdit(item.id)}
              className={`text-xl text-stone-700 font-medium tracking-wide 
              ${isCompletedItem(item.id) 
              ? 'line-through transition-colors delay-150 duration-200 ease-in-out text-gray-200' 
              : ""}`}
              >
                {item.todoItem}
            </li>
            
            <div
              onClick={() => removeItem(item.id)}
              className="absolute end-0"
            >
              <IoClose 
                className="text-2xl text-fuchsia-300 hover:text-fuchsia-600 
                opacity-0 hover:opacity-100"
              /> 
            </div>
          </div>
        ))}
      </ul>

      <div 
        className="flex gap-x-6 justify-between items-center mt-2 text-sm text-stone-500"
      >
        <span>{getActiveItemsList().length} items left</span>

        <TodoActivity 
          completed={completed} 
          activeItemsList={getActiveItemsList} 
          filter={filter} 
          setFilter={setFilter} 
        />
        
        {completed.length>0 
        ? <div
            className="hover:underline cursor-pointer"
            onClick={removeCompletedItems}
          >
            
            Clear Completed
          </div> 
        : ""}
        
      </div>
    </div>
  );
};
export default TodoList;
