import React, { useEffect, useState } from 'react'
import AddTask from '../../components/addTask/AddTask'
import TaskDetailCard from '../../components/taskDetailCard/TaskDetailCard'
import { v4 as uuidv4 } from 'uuid';
import './Home.css'
import { getService, postService } from '../../utils/httpServices';

const Home = () => {
  const [title,setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [error, setError] = useState({})
  const [listTasks, setListTasks] = useState([]);
  const [update, setUpdate] = useState(false)
  const [updatedId, setUpdatedId] = useState(null)

  useEffect(()=>{
    fetchTasks()
  },[])

  const fetchTasks = async({limit,offset} = {limit:5,offset:0}) => {
    const tasks = await getService(`http://localhost:3300/todo/task?limit=${limit}&offset=${offset}`)
    setListTasks(tasks?.data)
  }

  const postTasks = async(newTask) => {
    const {success} = await postService("http://localhost:3300/todo/task",newTask)
    if(success){
      fetchTasks()
    }
  }

  const doneTask = async(id) => {
    const {success} = await postService("http://localhost:3300/todo/task/done",{id})
    if(success){
      fetchTasks()
    }
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

  const handleAdd = async() => {
    const validate = validation();
    if(validate){     
        const newTask = {
          title,
          description,
        }
      await postTasks(newTask)
      }      
      setTitle("");
      setDescription(""); 
  }   

  const handleDone = async(id) => {
      await doneTask(id)
  }

  const handleUpdate = (id) => {
    setUpdate(true)    
  }

  const handleDelete = (id) => {
    setListTasks(listTasks.map(listTask =>
      listTask.id === id ? {...listTask,delete:true} : listTask      
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
          label={update ? "Update" : "Add"}
        />
      </div>

      <div className='home-task-card'>
        {listTasks?.length > 0 && listTasks?.slice(0,5)?.map((listTask) => 
          (!listTask.done && !listTask.delete  ) && (
            <TaskDetailCard
              key={listTask.id}
              title={listTask.title}
              description={listTask.description}
              handleDone={()=>{handleDone(listTask.id);console.log("Completed",listTask.title)}}
              handleUpdate={()=>{handleUpdate(listTask.id);console.log("Updated"),listTask.title}}
              handleDelete={()=>{handleDelete(listTask.id);console.log("Deleted",listTask.title)}}
            />
          )
        )}
      </div>
    </div>
  )
}

export default Home