import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

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
      <form onSubmit={submit} className="flex flex-col mt-4 px-4 gap-2">
        <TextField
          id="content"
          label="todo"
          placeholder="할일을 입력해주세요."
          multiline
        />
        <Button variant="contained">
          <div className="font-bold">작성</div>
        </Button>
      </form>
    </>
  );
}

export default NewTodoForm;
