import React, { useState, useEffect } from "react";
import axios from "axios";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/tasks/")
            .then(response => {
                setTasks(response.data);
            });
    }, []);

    const handleDelete = (taskId) => {
        axios.delete(`http://127.0.0.1:8000/api/tasks/${taskId}/`)
            .then(() => {
                setTasks(tasks.filter(task => task.id !== taskId));
            })
            .catch(error => {
                console.error("Erro ao excluir tarefa:", error);
            });
    }



    return (
        <div>
            <h2>Tarefas</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title} - {task.limit_date} - {task.status}
                        <button onClick={() => handleDelete(task.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
