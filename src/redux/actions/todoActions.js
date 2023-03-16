import { ADDTODO, DELELTETODO, DONETODO, EDITTODO } from "../types/type";

export const addTodo =(newTodo)=>{
    return {type : ADDTODO ,
    payload : newTodo , }
};
export const deleteTodo=(id)=>{
    return {
        type: DELELTETODO,
        payload:id,
    }
};
export const doneTodo=(id)=>{
    return {
        type: DONETODO,
        payload: id,
    }
}
export const editTodo=(id,newText)=>{
    return{
        type:EDITTODO,
        payload:{id,newText},
    }
}