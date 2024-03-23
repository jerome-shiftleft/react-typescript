//import Generics from "./lectures/Generics";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import "./sass/App.scss";

//Generics();

const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];
console.log('todos: ', todos);

function App() {

  const addTodoHandler = (text: string) => {
    console.log(`final text: ${text}`);
  }

  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />      
    </>
  );
}

export default App;
