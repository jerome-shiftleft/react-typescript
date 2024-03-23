//import { FC } from "react";
import { ReactNode } from "react";

type Todo = {  
  id: string;
  text: string;  
};

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
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
