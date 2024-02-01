import React, { useState,  useEffect } from "react";
import {FaChevronDown} from "react-icons/fa"

const TodoForm = ( { todos, setTodos, completed, setCompleted} ) => {
  const [id, setId] = useState(1);
  const initialValues = { id:id, todoItem: "" };
  const [form, setForm] = useState(initialValues);

  useEffect(() => {
    setForm(initialValues);
  }, [todos])

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if(form?.todoItem === "" || !form?.todoItem?.trim()){
      return false;
    }
    setTodos([...todos, form]);
    setId(id+1);
    console.log("form:", form);
  };

  const allItemsCompleted = () => {
    setCompleted(todos);
    if(completed.length === todos.length) {
      setCompleted([]);
    }
  }

  return (
    <form 
      onSubmit={onSubmit} 
      className="border-b border-gray-300"
      style={{boxShadow: "0px 2px 2px -2px rgba(128, 0, 128, 0.6)"}}
    >
      <div className="flex items-center my-2 gap-x-4">
        <div
          onClick={allItemsCompleted} 
          className={`${(todos.length === completed.length) 
            ? "text-gray-600" 
            : "text-gray-300"}`}
          >
          <FaChevronDown />
        </div>
        <input
          name="todoItem"
          placeholder="What needs to be done?"
          value={form.todoItem}
          onChange={onChangeInput}
          className="w-full p-3 text-xl italic font-semibold focus:outline-none"
        />
      </div>
    </form>
  );
};
export default TodoForm;
