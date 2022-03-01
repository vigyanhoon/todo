import React, { useState } from 'react';
import './Todo.css';
import { TodoItem } from './TodoItem'
import { Pagination } from './Pagination'

function Todo() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [starredIndex, setStarredIndex] = useState([])
  const itemsPerPage = 4

  const onKeyPress = (e) => {
    if (e.code === 'Enter') {
      addTodo()
    }
  }

  const addTodo = () => {
    if (todos.includes(inputText)) {
      alert('Todo already exists ' + inputText)
      return
    }

    setTodos([inputText, ...todos])
  }

  return (
    <div className="App">
      <header className="header">
        <span>
          Todo list
        </span>
      </header>
      <input className='todo-input'
        placeholder="enter todo"
        value={inputText}
        onInput={e => setInputText(e.target.value)}
        onKeyPress={onKeyPress} />
      {
        todos
          .slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage)
          .map((t, i) => {
            return <TodoItem key={t}
              name={t}
              index={currentPage * itemsPerPage + i}
              todos={todos}
              setTodos={setTodos}
              starredIndex={starredIndex}
              setStarredIndex={setStarredIndex}
            />
          })
      }
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        todos={todos}/>
    </div>
  );
}

export default Todo;
