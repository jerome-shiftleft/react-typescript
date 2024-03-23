import { useRef } from "react";

const NewTodo = (props: { onAddTodo: (text: string) => void }) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("submitting...");
    //const enteredText = todoTextInputRef.current!.value;
    const enteredText = todoTextInputRef.current?.value;
    console.log(`enteredText: ${enteredText}`);    

    if (enteredText && enteredText.trim().length > 0) {
      props.onAddTodo(enteredText);
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
        <button>Add Todo</button>
      </form>
    </>
  );
};

export default NewTodo;
