import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({todoItems:[],addNewItem:()=>{},dltItem:()=>{}});





const todoItemsReducer = (currTodoItems,action) =>{
  let newTodoItems = currTodoItems;
  
  if(action.type === "NEW_ITEM" ){
    newTodoItems  = [...currTodoItems, {name:action.playload.itemName, date:action.playload.itemDueDate}];
    
  }else if(action.type === "DLT_ITEM"){
   newTodoItems = currTodoItems.filter((item)=> item.name !== action.playload.itemName);
  }
 return newTodoItems;
};



const TodoItemsContextProvider = ({children})=>{
    const [todoItems,dispatchTodoItems] = useReducer(todoItemsReducer,[]);

  const addNewItem = (itemName, itemDueDate) =>{
    const newItemAction = {
      type:"NEW_ITEM",
      playload:{
        itemName,
        itemDueDate
      },
    };
    dispatchTodoItems(newItemAction);
  }

  const dltItem = (todoItemName) =>{
    const dltItemAction = {
      type:"DLT_ITEM",
      playload:{
        itemName:todoItemName
        
      },
    };
    dispatchTodoItems(dltItemAction);
  };
  
  return  <TodoItemsContext.Provider
  value={{todoItems:todoItems,addNewItem:addNewItem,dltItem:dltItem}}>
    {children}
  </TodoItemsContext.Provider>
}
export default TodoItemsContextProvider;