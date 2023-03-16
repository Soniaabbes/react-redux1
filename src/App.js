import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App">
     
       <AddTodo /> 
   
      <TodoList/>
      
    </div>
  )
}

export default App;
