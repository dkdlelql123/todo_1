function NewTodoForm({ todosState }) {
  const submit = (e) => {
    e.preventDefault();

    let form = e.target;
    form.content.value = form.content.value.trim();

    if (form.content.value.length === 0) {
      alert("할일을 입력해주세요");
      return;
    }

    todosState.addTodo(form.content.value);
    form.content.value = "";
    form.content.focus();
  };

  return (
    <>
      <form onSubmit={submit}>
        <input type="text" id="content" placeholder="할일을 입력해주세요." />
        <button type="submit">작성</button>
      </form>
    </>
  );
}

export default NewTodoForm;
