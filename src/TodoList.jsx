import React from 'react'
import { useState } from 'react';
 import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function TodoList() {

    const [task, setTask] = useState([]),
    [newTask, setNewTask] = useState(''),
    [EditTaskIndex, setEditTaskIndex] = useState('null');

    const handleAddTask = () => {
        if (newTask !== '') {
            setTask([...task, newTask])
            setNewTask('')
        }
        else {
            alert('Please enter a task')
        }
    }
    const handleDeleteTask = (index) => {
        const newTaskList = task.filter((_, i) => i !== index)
        setTask(newTaskList)
    }
    const handleEditTask = (index) => {
        setNewTask(task[index])
        setEditTaskIndex(index)
    }
    const handleSaveTask = () => {
        const newTaskList = [...task]
        newTaskList[EditTaskIndex] = newTask
        setTask(newTaskList)
        setNewTask('')
        setEditTaskIndex(null)
    }
    const handleCancelTask = () => {
        setNewTask('')
        setEditTaskIndex(null)
    }
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Todo List</h1>
            <div style={{ marginBottom: '10px' }}>
                <input 
                    type="text" 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)} 
                    style={{
                        width: 'calc(100% - 110px)',
                        padding: '8px',
                        marginRight: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '4px'
                    }}
                />
                <button 
                    onClick={EditTaskIndex !== null ? handleSaveTask : handleAddTask}
                    style={{
                        padding: '8px 12px',
                        backgroundColor: EditTaskIndex !== null ? '#4CAF50' : '#007BFF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    {EditTaskIndex !== null ? 'Save Task' : 'Add Task'}
                </button>
                {EditTaskIndex !== null && (
                    <button 
                        onClick={handleCancelTask}
                        style={{
                            padding: '8px 12px',
                            marginLeft: '10px',
                            backgroundColor: '#f44336',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Cancel
                    </button>
                )}
            </div>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {task.map((t, index) => (
                    <li 
                        key={index} 
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '8px',
                            borderBottom: '1px solid #ccc'
                        }}
                    >
                        <span>{t}</span>
                        <div>
                            <button 
                                onClick={() => handleEditTask(index)} 
                                style={{
                                    marginRight: '10px',
                                    backgroundColor: '#FFC107',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '4px',
                                    padding: '5px 10px',
                                    cursor: 'pointer'
                                }}
                            >
                                Edit
                            </button>
                            <button 
                                onClick={() => handleDeleteTask(index)}
                                style={{
                                    backgroundColor: '#f44336',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '4px',
                                    padding: '5px 10px',
                                    cursor: 'pointer'
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )




}
