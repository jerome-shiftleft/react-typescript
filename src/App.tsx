import Generics from "./lectures/Generics";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import "./sass/App.scss";

Generics();

const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];
console.log('todos: ', todos);

function App() {
  return (
    <>
      <Todos items={todos} bgColor="#666">
        <h2>Todos</h2>
      </Todos>
    </>
  );
}

export default App;
