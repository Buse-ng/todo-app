import React from 'react';
import TodoForm from "./TodoForm"

const Todo = () => {
    
    return(
        <div className='w-[400px] bg-orange-200 p-5 rounded-lg'>
            <h2 className='flex justify-center items-center font-bold text-2xl my-4'>
                Todos
            </h2>
            <TodoForm />
        </div>
    )
}
export default Todo;