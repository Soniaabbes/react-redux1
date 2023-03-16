import {ADDTODO, DELELTETODO, DONETODO, EDITTODO} from "../types/type";

const initialState = {
    todos: [
        {
            text: "voyager en espagne",
            id: 1,
            done: false
        },
         {
            text: "voyager en italie",
            id: 2,
            done: false
        },
    ],
};
const todoReducers = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADDTODO:

            return {
                ...state,
                todos: [
                    ...state.todos,
                    payload
                ]


            };
            case DELELTETODO : 
            return  { ...state, todos: state.todos.filter((todo)=> todo.id!=payload)

            };
            case DONETODO :
                return { ...state, todos: state.todos.map((todo)=> todo.id===payload? {...todo, done: !todo.done}:todo)}
        
        case EDITTODO :
            return { ...state,todos:state.todos.map((todo)=>todo.id===payload.id? {...todo,text:payload.newText}:todo)}
                default:
            return state;

    }
}
export default todoReducers;
