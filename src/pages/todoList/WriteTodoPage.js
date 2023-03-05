import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { TodosState, NoticeSnackBarState } from "../../states";

function WriteTodoPage() {
  const todosStatus = TodosState();
  const snackBarState = NoticeSnackBarState();
  const navigate = useNavigate();

  // 2020.10.10.
  const dateFmtKr = new Intl.DateTimeFormat("kr").format(Date.now());

  // 2020-10-10
  const dateFmt = Intl.DateTimeFormat("fr-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(Date.now());

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
    navigate(`/todoList`);
  };

  return (
    <>
      <form onSubmit={submit} className="flex flex-col mt-4 px-4 gap-2">
        <TextField
          type="date"
          id="dueDate"
          placeholder="마감일을 입력해주세요."
        ></TextField>
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

export default WriteTodoPage;