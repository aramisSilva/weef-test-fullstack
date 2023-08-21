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
                // Atualize o estado para remover a tarefa excluída da lista
                setTasks(tasks.filter(task => task.id !== taskId));
            })
            .catch(error => {
                console.error("Erro ao excluir tarefa:", error);
            });
    }

    const handleToggleStatus = (task) => {
        const newStatus = task.status === 'nao_feito' ? 'feito' : 'nao_feito';

        axios.patch(`http://127.0.0.1:8000/api/tasks/${task.id}/`, {
            status: newStatus
        })
        .then(response => {
            const updatedTasks = tasks.map(t =>
                t.id === task.id ? {...t, status: newStatus} : t
            );
            setTasks(updatedTasks);
        })
        .catch(error => {
            console.error("Erro ao atualizar status da tarefa:", error);
        });
    }

    return (
        <div>
            <h2>Tarefas</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title} - {task.limit_date} - {task.status}
                        <button onClick={() => handleToggleStatus(task)}>
                            {task.status === 'nao_feito' ? 'Marcar como Feita' : 'Marcar como Não Feita'}
                        </button>
                        <button onClick={() => handleDelete(task.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
