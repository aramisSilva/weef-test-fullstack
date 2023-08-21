import React, { useState } from 'react';
import axios from 'axios';

function AddTask({ onTaskAdded }) {
    const [title, setTitle] = useState('');
    const [limiteDate, setLimiteDate] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Enviando', {title, status:'nao_feito', limiteDate});
        axios.post('http://localhost:8000/api/tasks/', {
            title: title,
            status: 'nao_feito',
            limit_date: limiteDate
        },{headers:{
            'Content-Type': 'application/json'
        }})
        .then(response => {
            if(onTaskAdded) {
                onTaskAdded(response.data);
            }
            setTitle('');
        });
    };

    return (
        <div>
            <h2>Adicionar Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Título da tarefa"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    type="date"
                    value={limiteDate}
                    onChange={e => setLimiteDate(e.target.value)}
                />
                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
}

export default AddTask;
