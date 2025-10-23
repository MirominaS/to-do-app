import React, { useState } from 'react'
import AddTask from '../../components/addTask/AddTask'
import TaskDetailCard from '../../components/taskDetailCard/TaskDetailCard'
import './Home.css'

const Home = () => {
  const [title,setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [isAdd, setIsAdd] = useState(false);
  const [error, setError] = useState({})

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
       setIsAdd(true)
    }else{
      setIsAdd(false)
      console.log("helloo")
    }
   
  }

  return (
    <div className='home-container'>
      <div className='home-add-task'>
        <AddTask
          handleTitle={handleTitle}
          handleDescription={handleDescription}
          handleAdd={handleAdd}
          titleErrorMsg={error.tit && <span>{error.tit}</span>}
          descErrorMsg={error.desc && <span>{error.desc}</span>}
        />
      </div>
      <div className='home-task-card'>
      {isAdd &&
        <TaskDetailCard
          title={title}
          description={description}
        />
      }
      {isAdd &&
        <TaskDetailCard
          title={title}
          description={description}
        />
      }
      {isAdd &&
        <TaskDetailCard
          title={title}
          description={description}
        />
      }
      {isAdd &&
        <TaskDetailCard
          title={title}
          description={description}
        />
      }
      {isAdd &&
        <TaskDetailCard
          title={title}
          description={description}
        />
      }
      </div>
      
    </div>
  )
}

export default Home