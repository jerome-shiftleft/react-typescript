import Generics from "./lectures/Generics";
import Todos from "./components/Todos";
//import "./App.css";

Generics();

function App() {
  return (
    <>
      <Todos items={["Learn React", "Learn TypeScript"]} bgColor="red">
        <h2>Todos</h2>
      </Todos>
    </>
  );
}

export default App;
