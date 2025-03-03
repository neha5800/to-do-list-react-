import { useState } from "react";
import Header from "./header";
import ToDoList from "/src/ToDoList";
import "./App.css"
function App() {
 const [tasks, setTasks]= useState([]);
 const [newTask, setNewTask] = useState("");
 
 const addTask = () => {
  if (newTask.trim() !==""){
    setTasks([...tasks,{
      id: Date.now(), text: newTask,completed:false
    }]);
    setNewTask("");
  }
 };
  const taskCompletion =(taskId) =>{
    setTasks(tasks.map(task => task.id === taskId ?{...task, completed : !task.completed}: task));

  };
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  const editTask = (taskId, newText)=>{
    setTasks(tasks.map(task => task.id===taskId ?{...task ,text: newText}:task));

  };
 
 
 
 return (
    <>
     <div >
     <Header className="header"/>
     <div className='container'>
      <input type="text" className=''
      value={newTask}
      onChange={(e)=>setNewTask(e.target.value)}
      placeholder="Add your task here" />
      <button className='' onClick={addTask} >Add</button>
    
     </div>
     <ToDoList tasks={tasks} onToggle={taskCompletion} onDelete={deleteTask} onEdit={editTask}/>
     </div>
    </>
  )
}

export default App


