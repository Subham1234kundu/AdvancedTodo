import TodoItem from "./TodoItem"
import { TodoItemsContext } from "./store/todo-Item-Store";
import { useContext } from "react";


export default function TodoItems(){
    const {todoItems} = useContext(TodoItemsContext);
    
   
    return(
        <div>
            {
                todoItems.map((item)=>{
                   return <TodoItem key = {item.name} todoDate={item.date} todoName={item.name} />
                })
            }
        </div>
    )
}