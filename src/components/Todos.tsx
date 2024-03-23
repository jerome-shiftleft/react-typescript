//import { FC } from "react";
import { ReactNode } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

// type Todo = {
//   id: string;
//   text: string;
// };

type TodosProps = {
  items: Todo[];
  bgColor: string;
  children: ReactNode;
};

// const Todos: FC<Props> = (props) => {
// function Todos(props: TodoProps) {
function Todos({ items, children, ...props }: TodosProps) {
  return (
    <>
      {children}
      <ul style={{ backgroundColor: props.bgColor }}>
        {items.map((todo) => (
          <TodoItem className="todo-id" key={todo.id} id={todo.id}>
            {todo.text}
          </TodoItem>
        ))}
      </ul>
    </>
  );
}

export default Todos;
