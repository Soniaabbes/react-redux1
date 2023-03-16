import React, {useState} from 'react';
import {FormControl} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from 'react-redux';
import {editTodo} from '../redux/actions/todoActions';

function Edit({todo}) {
    const [show, setShow] = useState(false);
    const [text, setText] = useState(todo.text);
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // handleEdit
    const handleEdit = () => {
        (dispatch(editTodo(todo.id,text)));handleClose ();
    };

    return (
        <>
            <Button variant="primary"
                onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show}
                onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifier le texte</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl type='text'
                        value={text}
                        onChange={
                            (e) => setText(e.target.value)
                        }/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={handleClose
                            
                    }>
                        Close
                    </Button>
                    <Button variant="primary"
                        onClick={handleEdit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default Edit;
