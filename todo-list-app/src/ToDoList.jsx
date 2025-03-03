import ToDoItem from "./ToDoItem";
 function ToDoList({tasks, onToggle ,onDelete ,onEdit}){
    return (
        <ul className="">
            {
                tasks.map((task)=>(
                    <ToDoItem key={task.id} task={task} onToggle={onToggle}
                    onDelete={onDelete} onEdit={onEdit}/>)
                )
            }
        </ul>
    );
 }
  export default ToDoList;