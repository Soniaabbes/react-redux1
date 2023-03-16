import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'


function TodoList() {
  const todos = useSelector((state) => state.todoReducers.todos);
  return (
    <div> 
      {
        todos.map((todo)=>(<Todo todo={todo}/>
        ))
      }
    </div>
  );
}

export default TodoList;