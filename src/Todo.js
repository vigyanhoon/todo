import React, { useState } from 'react';
import './Todo.css';
import { FaStar, FaTrashAlt } from 'react-icons/fa';

function Todo() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [starredIndex, setStarredIndex] = useState([])

  const onKeyPress = (e)=> {
    if(e.code === 'Enter') {
      addTodo()        
    }
  }

  const addTodo = ()=>{
    if(todos.includes(inputText)) {
      alert('Todo already exists ' + inputText)
      return
    }

    setTodos([inputText, ...todos])
  }

  const starTodo = (index)=>{
    const starred = [...starredIndex]
    starred[index] = starred[index] === true ? false : true
    setStarredIndex(starred)
  }

  const deleteTodo = (index)=>{
    if(index !== -1) {
      const removedTodo = todos.filter((_a,i)=>i!==index)
      setTodos(removedTodo)
    }
  }

  const TodoItem = ({name, index})=>{
    return <div className='todo-item'>
      <p>{name}</p>
      <div>
        <FaStar className='todo-icon'
          color={starredIndex[index] ? 'yellow' : ''}
          onClick={()=>starTodo(index)}/>
        <FaTrashAlt className='todo-icon' onClick={()=>deleteTodo(index)}/>
      </div>
    </div>
  }

  return (
    <div className="App">
      <header className="header">
        <p>
          Todo list
        </p>
      </header>
      <input className='todo-input'
        placeholder="enter todo"
        value={inputText}
        onInput={e => setInputText(e.target.value)} 
        onKeyPress={onKeyPress}/>
      {
        todos.map((t, i)=><TodoItem key={t} name={t} index={i}/>)
      }
    </div>
  );
}

export default Todo;
