import React from 'react';

const Task = props => {
    return (
        <div
            onClick={() => props.toggleTask(props.task.id)}
            className={`task${props.task.completed ? ' completed' : ''}`}
        >
            <p>{props.task.task}</p>
        </div>
    );
};

export default Task;