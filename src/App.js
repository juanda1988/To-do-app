import react from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButtom, CreateTodoButton } from "./CreateTodoButton.js";
//import './App.css';

const defaultTodos=[
  {text:'Cortar cebolla', completed:true},
  {text:'Tormar el curso de intro a react', completed:true},
  {text:'Llorar con la llorona', completed:false}
];

function App() {
  const[todos, setTodos] = react.useState(defaultTodos);
  const [searchValue, setSearchValue] = react.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos =[];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  return (
   <react.Fragment>
      <TodoCounter
        total={totalTodos}
        completed ={completedTodos}
       />    
      <TodoSearch
        searchValue = {searchValue}
        setSearchValue ={setSearchValue}
       />
      <TodoList>
        {searchedTodos.map(todo =>(<TodoItem key={todo.text} text={todo.text} completed={todo.completed} />))}
      </TodoList>
      <CreateTodoButton />      
   </react.Fragment>
  );
}

export default App;
