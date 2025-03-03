import { useState } from "react";
 

function ToDoItem({  task, onToggle,onDelete, onEdit}){
    const[isEditing , setIsEditing]= useState(false);
    const[editText,setEditText]=useState(task.text);

    const handleEdit = ()=>{
        if(editText.trim() !==''){
            onEdit(task.id , editText);
            setIsEditing(false);
        }
    };
    return(
  <li className="">
    {isEditing?( <input 
    type='text' 
    value={editText}
    onChange={(e)=> setEditText(e.target.value)} />):(
        <span onClick={()=>onToggle(task.id)}>{task.text}</span>

    )}
      <div>
        {isEditing ? (
          <button  onClick={handleEdit}>Save</button>
        ) : (
          <button  onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button className="ml-2 text-red-500" onClick={() => onDelete(task.id)}>Delete</button>
      </div>
  </li>
    );
}
 export default ToDoItem;