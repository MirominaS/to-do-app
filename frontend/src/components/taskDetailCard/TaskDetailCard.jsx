import React, { useState } from 'react'
import './TaskDetailCard.css'
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

const TaskDetailCard = ({title = "Title",description = "Description",handleUpdate,handleDelete}) => {
    const [showCard ,setShowCard] = useState(true);

    const handleDone = () => {
        setShowCard((showCard) => !showCard)        
    }
    
  return (
    <div>
    {console.log(showCard)}
    {showCard &&
    <div className='task-detail-container'>
        
        <div className='task-details'>
            <div className='task-details-title'>{title}</div>
            <div className='task-details-description'>{description}</div>
        </div>
        <div className='task-buttons'>
            <div className='task-buttons-ud'>
                <div className='task-buttons-update' onClick={handleUpdate}>
                    <RxUpdate />
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