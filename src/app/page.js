"use client";
import './todo.css';
import { useState } from 'react';

export default function Home() {
    let [tasks, setTasks] = useState([
        { id: 1, description: "barans task" },
        { id: 2, description: "emirs task" }
    ]);

    let [inputString, setInputString] = useState("");
    

    return (
        <div className="container">
            <div className="container-header">
                <input value={inputString} type="text" placeholder="Add a task" onChange={(event)=>{
                    setInputString(event.target.value);
                }} />
                <button onClick={() =>{
                    // select the biggest id and return +1
                    setTasks([...tasks, {id: Math.max(...tasks.map(t => t.id), 0) + 1, description: inputString}]);
                    setInputString("");         
                } 
                }>Add</button>
            </div>

            <div className="container-body">
                {tasks.map(task => (
                    <div className="task" key={task.id}>
                        <p>{task.description}</p>
                        <button onClick={
                            () => {
                                setTasks(tasks.filter(t => t.id !== task.id));
                            }
                        }>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
