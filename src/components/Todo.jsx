import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoActivity from "./TodoActivity";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("todos:", todos);
  }, [todos]);
 
  return (
    <div className="flex flex-col">
      <h2 className="flex justify-center items-center font-semibold text-[75px] my-4 text-purple-300">
        todos
      </h2>
      <div className="w-[600px] bg-white p-5 rounded-lg">
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};
export default Todo;
