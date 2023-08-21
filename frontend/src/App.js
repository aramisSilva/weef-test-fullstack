import React, {useState, useEffect} from "react";
import axios from "axios";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import './styles/styles.css'

function App() {

  const [tasks, setTasks] = useState([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/tasks/")
            .then(response =>{
                setTasks(response.data);
            })
    }, []);
    const handleTaskAdded = (newTask) => {
        setTasks(prevTasks => [...prevTasks, newTask])
    }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Tarefas</h1>
        <AddTask onTaskAdded={handleTaskAdded}/>
        <TaskList tasks={tasks}/>
      </header>
    </div>
  );
}

export default App;
