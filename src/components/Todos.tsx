//import { FC } from "react";
//import { ReactNode } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

// type Todo = {
//   id: string;
//   text: string;
// };

type TodosProps = {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
};

// const Todos: FC<Props> = (props) => {
// function Todos(props: TodoProps) {
function Todos({ items, onRemoveTodo }: TodosProps) {
  return (
    <>
      <ul className="todo-list">
        {items.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            onRemoveTodo={onRemoveTodo}
          />
        ))}
      </ul>
    </>
  );
}

export default Todos;
