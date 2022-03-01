import React from 'react';
import { FaStar, FaTrashAlt } from 'react-icons/fa';

export const TodoItem = ({ name, index, todos, setTodos, starredIndex, setStarredIndex }) => {
    
    const starTodo = (index) => {
        const starred = [...starredIndex]
        starred[index] = starred[index] === true ? false : true
        setStarredIndex(starred)
    }

    const deleteTodo = (index) => {
        if (index !== -1) {
            const starred = [...starredIndex]
            starred[index] = false  //unfavourite when deleted
            setStarredIndex(starred)
            const removedTodo = todos.filter((_a, i) => i !== index)
            setTodos(removedTodo)
        }
    }

    return <div className='todo-item'>
        <p>{name}</p>
        <div>
            <FaStar className='todo-icon'
                color={starredIndex[index] ? 'yellow' : ''}
                onClick={() => starTodo(index)} />
            <FaTrashAlt className='todo-icon' onClick={() => deleteTodo(index)} />
        </div>
    </div>
}