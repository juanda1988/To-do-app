import react from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import {TodoContext} from '../TodoContext';

function AppUI() {
    return (   
    <react.Fragment>
        <TodoCounter/>    

        <TodoSearch/>

        <TodoContext.Consumer>
          {({error,loading,searchedTodos,completeTodo,deleteTodo})=> (
              <TodoList>
        
              {error && <p>Desespérate, hubo un error...</p>}
              
              {loading && <p>Estamos cargando, no desesperes...</p>}
              
              {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
              
              {searchedTodos.map(todo =>(<TodoItem key={todo.text} text={todo.text} completed={todo.completed} onDelete={()=>deleteTodo(todo.text)} onComplete={()=>completeTodo(todo.text)} />))}
              </TodoList>
          )
          }
        </TodoContext.Consumer>

        <CreateTodoButton />      
     </react.Fragment>);
}

export {AppUI};