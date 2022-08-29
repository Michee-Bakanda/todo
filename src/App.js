import {useState} from "react"
import './App.css';
import Tasks from "./components/Tasks";

function App() {

   const [name, setName] = useState("")
   const [time, setTime] = useState("")
   const [taskList, setTaskList] = useState([])

   const addTask = ()=>{
      setTaskList([...taskList, {name: name, time: time}])
   }

  

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center"} } className="App">
       <h1>Todo List</h1>
       <label>Task Name:</label>
       <input style={{width:"120px"}} type="text" id="task" value={name} onChange={e=> setName(e.target.value)} />
       <label>Task Time:</label>
       <input style={{width:"120px"}} type="text" id="time" value={time} onChange={e=> setTime(e.target.value)} />
       <button style={{width:"120px"}} onClick={addTask}>Add</button>

       {taskList.map((task)=>{
         return <Tasks name={task.name} time={task.time}/>
       })}
    </div>
  );
}

export default App;
