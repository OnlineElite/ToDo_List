import React, {useState} from 'react'
import './TodoStyle.css'
import ToDoForm from './ToDoForm'

const ShowList = ()=>{
    const [tasks, setTasks] = useState([])

    function addTodo(todo){
        setTasks([...tasks, todo])
    }

    function handelComplate(index){
        setTasks(
            tasks.map((task, i)=> i === index? {...task, completed : !task.completed}: task)
        )
    }

    function handelDelete(index){
        setTasks(
            tasks.filter((task, i)=> i !== index )
        )
    }

    return(
        <>
            <ToDoForm addTodo={addTodo}/>
            <div className='listpart'>
                    <ul> 
                        {tasks.map((task, index) => (
                            < div className='lis'>
                                <li 
                                style={{ textDecoration: (task.completed)? 'line-through' : 'none',
                                    color : (task.completed)? 'red' : 'white' }}> 
                                    {'• '+ task.item} 
                                </li>
                                <div className='btns'>
                                    <button 
                                        onClick={() => handelComplate(index)} 
                                        style={{backgroundColor: (task.completed)? 'lawngreen' : 'darkkhaki'}}>
                                        {(task.completed)? 'Completed': 'Not Completed'}
                                    </button>
                                    <button 
                                        onClick={() => handelDelete(index)} 
                                        style={{backgroundColor: 'red', color : 'white'}}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </ul>
            </div>
        </>
    )
}

export default ShowList;