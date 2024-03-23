type TodoItemProps = {
  id: string;
  text: string;
  onRemoveTodo: (id: string) => void;
};

export default function TodoItem({ id, text, onRemoveTodo }: TodoItemProps) {

  function removeTodoHandler() {
    onRemoveTodo(id);
  }

  return (
    <li>
      <button onClick={removeTodoHandler}>{text}</button>
    </li>
  );
}
