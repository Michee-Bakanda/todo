import React from 'react'

const Tasks = ({name,time}) => {
  return (
    <div>
        <div className='task'>
           <h1>Task name: {name}</h1>
           <h1>Time to complete the task: {time}</h1>
        </div>
    </div>
  )
}

export default Tasks