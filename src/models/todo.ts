class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = Math.random().toString().substring(2);
  }
}

export default Todo