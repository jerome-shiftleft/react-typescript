
type TodoItemProps = {
  id: string;
  children: React.ReactNode;
}

export default function TodoItem({ id, children }: TodoItemProps) {
  return (
    <li>
      <span className="todo-id">{id}</span>
      {children}
    </li>
  );
}
