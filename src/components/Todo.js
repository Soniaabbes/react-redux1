import React from 'react';
import { Button, Form} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteTodo, doneTodo } from '../redux/actions/todoActions';
import Edit from './Edit';



function Todo({todo}) {
  const dispatch = useDispatch  ();

  return (
    
    <div>
    
        <Form className='formtodo'>
           <p style={{color: todo.done? "red": null}}>{todo.text}</p> 
        <Button variant="primary" onClick={()=>dispatch(doneTodo(todo.id))}>Done</Button>
      <Button variant="secondary" onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</Button>
      <Edit  todo={todo}   />
      </Form>
    </div>
  );
}

export default Todo;