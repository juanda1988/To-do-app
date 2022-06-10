import react from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButtom, CreateTodoButton } from "./CreateTodoButton.js";
//import './App.css';

const defaultTodos=[
  {text:'Cortar cebolla', completed:true},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];

function App() {
  const[todos, setTodos] = react.useState(defaultTodos);
  const [searchValue, setSearchValue] = react.useState('');
  const completedTodos = todos.filter(todo => todo.completed == true);

  return (
   <react.Fragment>
      <TodoCounter />    
      <TodoSearch
        searchValue = {searchValue}
        setSearchValue ={setSearchValue}
       />
      <TodoList>
        {todos.map(todo =>(<TodoItem key={todo.text} text={todo.text} completed={todo.completed} />))}
      </TodoList>
      <CreateTodoButton />      
   </react.Fragment>
  );
}

export default App;
