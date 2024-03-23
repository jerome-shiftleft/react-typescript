import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";

function Todos() {
  const todosCtx = useContext(TodosContext);

  return (
    <>
      <ul className="todo-list">
        {todosCtx.items.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            onRemoveTodo={todosCtx.removeTodo}
          />
        ))}
      </ul>
    </>
  );
}

export default Todos;
