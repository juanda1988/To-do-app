import react from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";

function AppUI({
    loading,
    error,   
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo}) {
    return (   <react.Fragment>
        <TodoCounter
          total={totalTodos}
          completed ={completedTodos}
         />    
        <TodoSearch
          searchValue = {searchValue}
          setSearchValue ={setSearchValue}
         />
        <TodoList>
          {loading}
          {searchedTodos.map(todo =>(<TodoItem key={todo.text} text={todo.text} completed={todo.completed} onDelete={()=>deleteTodo(todo.text)} onComplete={()=>completeTodo(todo.text)} />))}
        </TodoList>
        <CreateTodoButton />      
     </react.Fragment>);
}

export {AppUI};