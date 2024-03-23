import { useRef } from "react";

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('submitting...');
    //const enteredText = todoTextInputRef.current!.value;
    const enteredText = todoTextInputRef.current?.value;
    console.log(`enteredText: ${enteredText}`);
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="text"></label>
        <input ref={todoTextInputRef} type="text" id="text" />
        <button>Add Todo</button>
      </form>
    </>
  )
}

export default NewTodo;