import React, { useState } from 'react'
import AddTask from '../../components/addTask/AddTask'
import TaskDetailCard from '../../components/taskDetailCard/TaskDetailCard'
import './Home.css'

const Home = () => {
  const [title,setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [error, setError] = useState({})
  const [showCard ,setShowCard] = useState(true);
  const [listTasks, setListTasks] = useState([]);


  const handleDone = () => {
      setShowCard((showCard) => !showCard)        
  }

  const handleTitle = (e) => {
    setTitle(e.target.value)
    console.log(title)
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
    console.log(description)
  }

  const validation = () => {
    let err = {tit: "", desc:""};
    let valid = true;
    if(!title.trim()){
      err.tit = "Title is Empty!";
      valid = false;
    }
    if(!description.trim()){
      err.desc = "Description is Empty!";
      valid = false;
      console.log("check")
    }
    setError(err);
    return valid;
  }

  const handleAdd = () => {
    const validate = validation();
    if(validate){
      setListTasks([...listTasks,{title:title,description:description}]);
      setTitle("");
      setDescription(""); 

    }
   
  }

  return (
    <div className='home-container'>
      <div className='home-add-task'>
        <AddTask
          handleTitle={handleTitle}
          handleDescription={handleDescription}
          handleAdd={handleAdd}
          valueTitle={title}
          valueDescription={description}
          titleErrorMsg={error.tit && <span className='error-msg'>{error.tit}</span>}
          descErrorMsg={error.desc && <span className='error-msg'>{error.desc}</span>}
        />
      </div>

      <div className='home-task-card'>
      {listTasks.length > 0 && listTasks.map((listTask,index) => 
          <TaskDetailCard
            key={index}
            title={listTask.title}
            description={listTask.description}
            handleDone={handleDone}
            showCard={showCard}
        />
      )
      }
      </div>
      
    </div>
  )
}

export default Home