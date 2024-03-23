import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import "./sass/App.scss";

function App() {



  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    console.log(`final text: ${todoText}`);
    const newTodo = new Todo(todoText)
    setTodos((prevTodos) => {
      //return prevTodos.concat(newTodo);
      return [...prevTodos, newTodo];
    });
  };

  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </>
  );
}

export default App;
