import React from "react";
import { useState } from "react";

const TodoForm = () => {
  const initialValues = { todoField: "" };
  const [form, setForm] = useState(initialValues);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.todoField === "") {
      return false;
    }
    console.log(form);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="todoField"
        placeholder="What needs to be done?"
        value={form.todoField}
        onChange={onChangeInput}
      />
      <button className="bg-red-500">add</button>
    </form>
  );
};
export default TodoForm;
