import React, { useState } from 'react'
import './TaskDetailCard.css'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const TaskDetailCard = ({title = "Title",description = "Description",handleUpdate,handleDelete,handleDone,showCard}) => {
   
    
  return (
    <div  className='task-detail-container'>
    {console.log(showCard)}
    {showCard &&
    <div className='task-details-full'>        
        <div className='task-details'>
            <div className='task-details-title'>{title}</div>
            <div className='task-details-description'>{description}</div>
        </div>
        <div className='task-buttons'>
            <div className='task-buttons-ud'>
                <div className='task-buttons-update' onClick={handleUpdate}>
                    <MdEdit />
                </div>
                <div className='task-buttons-delete' onClick={handleDelete}>
                    <MdDelete />
                </div>
            </div>
            <div className='task-buttons-done'>
                <button onClick={handleDone}>Done</button>
            </div>
        </div>
    </div>
    }
    </div>
  )
}

export default TaskDetailCard