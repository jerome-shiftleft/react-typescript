//import { FC } from "react";
import { ReactNode } from "react";

type TodoProps = {
  items: Array<string>;
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
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
