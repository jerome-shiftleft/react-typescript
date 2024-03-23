type TodoItemProps = {
  id: string;
  className: string;
  children: React.ReactNode;
};

export default function TodoItem({ id, children, ...props }: TodoItemProps) {
  return (
    <li>
      <span className={props.className}>{id}</span>
      {children}
    </li>
  );
}
