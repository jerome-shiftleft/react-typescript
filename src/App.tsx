import Generics from "./lectures/Generics";
import Todos from "./components/Todos";
//import "./App.css";

Generics();

const todos = ["Learn React", "Learn TypeScript"];

function App() {
  return (
    <>
      <Todos items={todos} bgColor="red">
        <h2>Todos</h2>
      </Todos>
    </>
  );
}

export default App;
