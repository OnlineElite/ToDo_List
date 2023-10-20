import React, {useState} from 'react'
import './TodoStyle.css'

const ToDoForm =( {addTodo} ) =>{

    const [todo, setTodo] = useState('');
    
    const handellSubmit =(e)=>{
        e.preventDefault()
        addTodo({item: todo, completed: false})
        setTodo('')
    }
    
    return(
        <div className='formpart'>
                <form className='frm' onSubmit={handellSubmit}>
                    <input type='text' value={todo} onChange={(e)=> setTodo(e.target.value)} placeholder='Add a new todo'></input>
                    <button type='submit'> Add new task</button>
                </form>
        </div>
    )
}

export default ToDoForm;
