import React from 'react'
import './AddTask.css'

const AddTask = ({handleTitle,handleDescription,handleAdd,titleErrorMsg,descErrorMsg}) => {
  return (
    <div className='add-task-container'>
        <div className='add-task-heading'>Add a Task</div>
        <div className='add-task-title'>
            <input type="text" placeholder='Title'  onChange={handleTitle}/>
            {titleErrorMsg}
            {console.log("title",titleErrorMsg)}
        </div>
        <div className='add-task-description'>
            <input type="text" placeholder='Description' onChange={handleDescription} />   
            {descErrorMsg} 
        </div>
        <div className='add-task-button'>
            <button onClick={handleAdd}>Add</button>
            
        </div>
    </div>
  )
}

export default AddTask