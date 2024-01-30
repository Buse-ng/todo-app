import React from 'react'

const TodoActivity = ( { todos } ) => {


  return (
    <div className='flex items-center justify-center'>
        <div className='flex gap-x-4'>
            <div className='hover:border hover:border-gray-100'>All</div>
            <div className='hover:border hover:border-gray-100'>Active</div>
            <div className='hover:border hover:border-gray-100'>Completed</div>
        </div>
    </div>
  )
}

export default TodoActivity