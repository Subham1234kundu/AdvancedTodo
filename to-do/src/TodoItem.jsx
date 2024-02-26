import { TiDelete } from "react-icons/ti"; 
import { TodoItemsContext } from "./store/todo-Item-Store";
import { useContext } from "react";


export default function TodoItem({todoName,todoDate}){
   const{dltItem} = useContext(TodoItemsContext);

    return(
        <div className="row">
    <div className="col-6">{todoName}</div>
    <div className="col-4">{todoDate}</div>
    <div className="col-2"><button type="button" className="btn btn-danger" onClick={()=> dltItem(todoName)}><TiDelete /></button></div>
  </div>
    );
}