import React from 'react'

import { FaTimes } from 'react-icons/fa'

const Task = (props) => {

    const { task, onDelete, onToggle} = props;


    return (
        <div className='task' onDoubleClick={ () => onToggle(task.id) }>
           <div>
                <h3>{ task.text } <FaTimes style={ {color: 'salmon', cursor: 'pointer'}} onClick={ onDelete } /></h3>
                <p>
                    { task.day }
                </p> 
            </div>  
        </div>
    )
}

export default Task
