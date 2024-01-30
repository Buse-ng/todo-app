import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoActivity from "./TodoActivity";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="flex flex-col">
      <h2 className="flex justify-center items-center font-bold text-2xl my-4">
        Todos
      </h2>
      <div className="w-[400px] bg-orange-200 p-5 rounded-lg">
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
};
export default Todo;
