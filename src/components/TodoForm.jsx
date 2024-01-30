import React, { useState,  useEffect } from "react";

const TodoForm = ( { todos, setTodos} ) => {

  const initialValues = { todoItem: "" };
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
    console.log(form);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="todoItem"
        placeholder="What needs to be done?"
        value={form.todoItem}
        onChange={onChangeInput}
      />
      <button className="bg-red-500 my-6">add</button>
    </form>
  );
};
export default TodoForm;
