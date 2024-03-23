import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("submitting...");
    //const enteredText = todoTextInputRef.current!.value;
    const enteredText = todoTextInputRef.current?.value;
    console.log(`enteredText: ${enteredText}`);    

    if (enteredText && enteredText.trim().length > 0) {
      todosCtx.addTodo(enteredText);
      todoTextInputRef.current!.value = '';
    } else {
      return;
    }
  }; // end of const NewTodo()

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="text"></label>
        <input ref={todoTextInputRef} type="text" id="text" />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default NewTodo;
