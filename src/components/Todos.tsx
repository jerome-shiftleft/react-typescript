//import { FC } from "react";
import { ReactNode } from "react";
import Todo from "../models/todo";

// type Todo = {
//   id: string;
//   text: string;
// };

type TodoProps = {
  items: Todo[];
  bgColor: string;
  children: ReactNode;
};

// const Todos: FC<Props> = (props) => {
// function Todos(props: TodoProps) {
function Todos({ items, children, ...props }: TodoProps) {
  return (
    <>
      {children}
      <ul style={{ backgroundColor: props.bgColor }}>
        {items.map((todo) => (
          <li key={todo.id}>
            <span className="todo-id">{todo.id}</span>
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
