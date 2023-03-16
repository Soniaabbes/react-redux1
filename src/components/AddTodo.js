import React, {useState} from 'react'
import {Button, FormControl, Form} from 'react-bootstrap'
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/actions/todoActions'


function AddTodo() {
    const [text, setText] = useState(" ");
    const dispatch = useDispatch();
    // handleAdd
    const handleAdd = (e) => {
        e.preventDefault();
        if (text) {
            dispatch(addTodo({id: Math.random(), done: false, text}));
            setText("");
        } else {
            alert("remplir le champs");
        }


    }
    return (<div>
        <Form style={
                {
                    display: "flex",
                    width: "300 px",
                    marginLeft: "200 px",
                    paddingLeft: "200px",
                    marginRight: "200px"
                }
            }
            onSubmit={handleAdd}>
            <FormControl type='text' placeholder='add todo...'
                value={text}
                onChange={
                    (e) => setText(e.target.value)
                }/>
            <Button variant="secondary" type='submit'>
                add</Button>
        </Form>


    </div>)
}

export default AddTodo
