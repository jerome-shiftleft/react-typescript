type TodoItemProps = {
  children: React.ReactNode;
};

export default function TodoItem({ children }: TodoItemProps) {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
}
