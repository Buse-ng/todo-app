import React, { useState,  useEffect } from "react";
import {FaChevronDown} from "react-icons/fa"

const TodoForm = ( { todos, setTodos} ) => {
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

    if (form.todoItem === "") {
      return false;
    }
    setTodos([...todos, form]);
    setId(id+1);
    console.log("form:", form);
  };

  return (
    <form onSubmit={onSubmit} className="border-b border-gray-300 shadow-sm shadow-purple-200">
      <div className="flex items-center my-2 gap-x-4">
        <div className="text-gray-300"> <FaChevronDown /> </div>
        <input
          name="todoItem"
          placeholder="What needs to be done?"
          value={form.todoItem}
          onChange={onChangeInput}
          className="w-full p-3 text-xl italic font-semibold tracking-wide focus:outline-none"
        />
      </div>
    </form>
  );
};
export default TodoForm;
