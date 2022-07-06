import react from "react";
import { AppUI } from "./AppUI";
//import './App.css';

// const defaultTodos=[
//   {text:'Cortar cebolla', completed:true},
//   {text:'Tormar el curso de intro a react', completed:true},
//   {text:'Llorar con la llorona', completed:false}
// ];
function useLocarStorage(itemName, initialValue) {
  const[item, setItem] = react.useState(initialValue);
  react.useEffect(
    () => {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        
      }, 1000);
    }

  );

  
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  }
  return [
    item,
    saveItem
  ];
}

function App() {

  const[todos,saveTodos] = useLocarStorage('TODOS_V1', []);
  
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



  const completeTodo = (text) =>{
   const todoIndex = todos.findIndex(todo => todo.text === text);
   const newTodos = [...todos];
   newTodos[todoIndex] ={
    text:todos[todoIndex].text,
    completed: true
   }
   saveTodos(newTodos);
  }

  const deleteTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos);
   }
  // console.log('Render(antes del useEffect)');

  // react.useEffect(() => {
  //  console.log('UseEffect')
  // },[totalTodos])

  // console.log('Render(luego del useEffect)');

  return (
   <AppUI
      totalTodos={totalTodos}
      completedTodos ={completedTodos}
      searchValue = {searchValue}
      setSearchValue ={setSearchValue}
      searchedTodos ={searchedTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
    />
  );
}

export default App;
