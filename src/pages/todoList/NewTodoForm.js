import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { TodosState } from "../../states";

function NewTodoForm({ snackBarState }) {
  const todosStatus = TodosState();
  const submit = (e) => {
    e.preventDefault();

    let form = e.target;
    form.content.value = form.content.value.trim();

    if (form.content.value.length === 0) {
      alert("할일을 입력해주세요");
      return;
    }

    const newTodo = todosStatus.addTodo(form.content.value);

    form.content.value = "";
    form.content.focus();
    snackBarState.open(`${newTodo.id}번 글이 등록되었습니다.`);
  };

  return (
    <>
      <form onSubmit={submit} className="flex flex-col mt-4 px-4 gap-2">
        <TextField
          rows={4}
          id="content"
          label="todo"
          placeholder="할일을 입력해주세요."
          multiline
        />
        <Button type="submit" variant="contained">
          <div className="font-bold">작성</div>
        </Button>
      </form>
    </>
  );
}

export default NewTodoForm;
