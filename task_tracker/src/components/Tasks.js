import React, { useState } from 'react'

import Task from './Task'

const Tasks = () => {

    const [tasks, setTasks] = useState([ 
    
            {
                id: 1,
                text: 'javascript learning is important for full stack developer',
                day: '25th january',
                reminder: true
            },
            {
                id: 2,
                text: 'react learning is important for front-end developer',
                day: '10th december',
                reminder: false
            },
            {
                id: 3,
                text: 'node js learning is important for back-end developer',
                day: '10th january',
                reminder: true
            }, 
            {
                id: 4,
                text: 'next js learning is important for react developer',
                day: '15th january',
                reminder: false
            },
        
        ]);

    const deleteTask = (id) =>{
        
        setTasks(tasks.filter( (tas) => tas.id !== id));
    }

    

    return (
        <div>
            {tasks.map( (task, index) =>{
                return (
                    <Task key={ index } task={ task } onDelete={ () => deleteTask(task.id) }/>
                );
            })}
        </div> 
    )
}

export default Tasks
