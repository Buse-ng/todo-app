import React from 'react'

const TodoActivity = ( {filter, setFilter} ) => {

  return (
    <div className='flex items-center justify-center'>
        <div className='flex gap-x-4'>
            <div 
              onClick={()=>setFilter("all")}
              className={`hover:border hover:border-gray-200 p-1 cursor-pointer 
              ${filter === "all" ? "border border-gray-300" : "" }`}
            >
              All
            </div>
            <div 
              onClick={()=>setFilter("active")}
              className={`hover:border hover:border-gray-200 p-1 cursor-pointer 
              ${filter=== "active" ? "border border-gray-300" : "" }`}
            >
              Active
            </div>
            <div 
              onClick={()=>setFilter("completed")}
              className={`hover:border hover:border-gray-200 p-1 cursor-pointer 
              ${filter=== "completed" ? "border border-gray-300" : "" }`}
            >
              Completed
            </div>
        </div>
    </div>
  )
}

export default TodoActivity