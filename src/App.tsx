import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import { TodosContextProvider } from "./store/todos-context";
import "./sass/App.scss";

export default function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
} // end of export default function App(
