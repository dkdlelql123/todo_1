import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { TodosState, NoticeSnackBarState } from "../../states";
import dateToStr from "../../utils/dateForStr";

function WriteTodoPage() {
  const todosStatus = TodosState();
  const snackBarState = NoticeSnackBarState();
  const navigate = useNavigate();

  // 2020-10-10
  const dateFmt = dateToStr(new Date());

  const submit = (e) => {
    e.preventDefault();

    let form = e.target;

    let dueDate = form.dueDate.value.trim();
    if (dueDate.length === 0) {
      alert("마감일을 입력해주세요");
      return;
    }

    let content = form.content.value.trim();
    if (content.length === 0) {
      alert("할일을 입력해주세요");
      return;
    }

    const newTodo = todosStatus.addTodo(content, dueDate);

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
          defaultValue={dateFmt}
          inputProps={{ min: dateFmt }}
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
