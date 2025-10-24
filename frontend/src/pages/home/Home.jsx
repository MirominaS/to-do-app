import React, { useState } from 'react'
import AddTask from '../../components/addTask/AddTask'
import TaskDetailCard from '../../components/taskDetailCard/TaskDetailCard'
import './Home.css'

const Home = () => {
  const [title,setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [error, setError] = useState({})
  const [listTasks, setListTasks] = useState([]);

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
      const newTask = {
        id: Date.now(),
        title:title,
        description: description,
        done:false
      }
      setListTasks([newTask,...listTasks]);
      setTitle("");
      setDescription(""); 
    }   
  }

    const handleDone = (id) => {
      setListTasks(listTasks.map(listTask =>
        listTask.id === id ? {...listTask,done:true} : listTask      
      ))            
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
        {listTasks.length > 0 && listTasks.slice(0,5).map((listTask) => 
          !listTask.done ? (
            <TaskDetailCard
              key={listTask.id}
              title={listTask.title}
              description={listTask.description}
              handleDone={()=>handleDone(listTask.id)}
            />
          ): null 
        )}
      </div>
    </div>
  )
}

export default Home