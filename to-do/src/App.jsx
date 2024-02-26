
import AddTodoList from "./AddTodo";
import TodoItems from "./TodoItems";
import WelcmMsg from "./WelcmMsg";
import TodoItemsContextProvider from "./store/todo-Item-Store"



function App() {


  return (
    <TodoItemsContextProvider>
      <center>
        <h1>TO-DO App</h1>
      <div  style={{display:"flex", flexDirection:"column",gap:"15px"}}>
      <AddTodoList />
      <WelcmMsg />
      <TodoItems />
  
      </div>

      </center>
    </TodoItemsContextProvider>
    
  )
}

export default App
