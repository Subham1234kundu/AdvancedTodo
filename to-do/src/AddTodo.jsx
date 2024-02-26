import {useRef } from "react"
import { MdAddTask } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "./store/todo-Item-Store";

export default function AddTodoList(){

    const todoNameElem = useRef();
    const todoDateElem = useRef();
    const {addNewItem} = useContext(TodoItemsContext);
 

    let handleAddButton = (event) =>{
      event.preventDefault();
      const todoName = todoNameElem.current.value;
      const dueDate = todoDateElem.current.value;
      todoNameElem.current.value = "";
      todoDateElem.current.value = "";
       addNewItem(todoName,dueDate);
       
    };


    return(
        
        <form className="row" onSubmit={handleAddButton}>
    <div className="col-6">
      <input type="text" ref={todoNameElem} placeholder="enter todo here"  /></div>
    <div className="col-4">
      <input type="date" ref={todoDateElem} /></div>
    <div className="col-2"><button type="submit" className="btn btn-success" ><MdAddTask /></button></div>
      
  </form>
    );
};