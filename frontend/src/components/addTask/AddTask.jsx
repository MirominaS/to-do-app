import React from 'react'
import './AddTask.css'

const AddTask = ({value}) => {
  return (
    <div className='add-task-container'>
        <div className='add-task-heading'>Add a Task</div>
        <div className='add-task-title'>
            <input type="text" placeholder='Title' value={value}/>
        </div>
        <div className='add-task-description'>
            <input type="text" placeholder='Description' value={value} />
        </div>
        <div className='add-task-button'>
            <button>Add</button>
        </div>
    </div>
  )
}

export default AddTask