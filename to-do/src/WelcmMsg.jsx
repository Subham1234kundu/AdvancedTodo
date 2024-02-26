import { useContext } from "react";
import { TodoItemsContext } from "./store/todo-Item-Store";

export default function WelcmMsg(){
    const contextObj = useContext(TodoItemsContext);
    const todoItems = contextObj.todoItems;
    return ( 
    todoItems.length === 0 && <h1 style={{margin:"30px"}}>no todo item added yet</h1>
    );
}