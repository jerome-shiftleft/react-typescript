const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('submitting...');
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="text"></label>
        <input type="text" id="text" />
        <button>Add Todo</button>
      </form>
    </>
  )
}

export default NewTodo;