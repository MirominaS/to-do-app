import React from 'react'
import './AddTask.css'

const AddTask = ({
    handleTitle,
    handleDescription,
    handleAdd,
    titleErrorMsg,
    descErrorMsg,
    valueTitle,
    valueDescription,
    label
  }) => {
  return (
    <div className='add-task-container'>
        <div className='add-task-heading'>Add a Task</div>
        <div className='add-task-title'>
            <input type="text" placeholder='Title' value={valueTitle}  onChange={handleTitle}/>
            {titleErrorMsg}
        </div>

        <div className='add-task-description'>
            <textarea 
              rows={5} 
              type="text" 
              placeholder='Description' 
              value={valueDescription} 
              onChange={handleDescription} 
            />   
            {descErrorMsg} 
        </div>
        <div className='add-task-button'>
          <div className='task-button'>
            <button onClick={handleAdd}>{label}</button>
          </div>           
            
        </div>
    </div>
  )
}

export default AddTask