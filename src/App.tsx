import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import "./sass/App.scss";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodoHandler(todoText: string) {
    console.log(`final text: ${todoText}`);
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      //return prevTodos.concat(newTodo);
      return [...prevTodos, newTodo];
    });
  }

  function removeTodoHandler(id: string) {
    console.log(`removing ${id}`);
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter((todo) => {
        return todo.id !== id;
      });
      return newTodos;
    });
  }

  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </>
  );
} // end of export default function App(
