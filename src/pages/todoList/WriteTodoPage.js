import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TodosState, NoticeSnackBarState } from "../../states";
import dateToStr from "../../utils/dateForStr";

function WriteTodoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const todosStatus = TodosState();
  const snackBarState = NoticeSnackBarState();
  // 2020-10-10
  const dateFmt = dateToStr(new Date());
  let todo = null;
  if (id !== null && id !== undefined) {
    todo = todosStatus.findTodoById(id);
  }

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

    let msg = "";
    if (todo !== null) {
      todosStatus.modifyTodo(todo.id, content, dueDate);
      msg = `${todo.id}번 글이 수정되었습니다.`;
    } else {
      const newTodo = todosStatus.addTodo(content, dueDate);
      msg = `${newTodo.id}번 글이 등록되었습니다.`;
    }

    form.content.value = "";
    form.content.focus();
    snackBarState.open(msg);
    navigate(`/todoList`);
  };

  console.log("id " + id);
  console.log(todo);

  return (
    <>
      <form onSubmit={submit} className="flex flex-col mt-4 px-4 gap-2">
        <TextField
          type="date"
          id="dueDate"
          placeholder="마감일을 입력해주세요."
          inputProps={{ min: dateFmt }}
          defaultValue={todo !== null ? todo?.dueDate : dateFmt}
        ></TextField>
        <TextField
          rows={4}
          id="content"
          label="todo"
          placeholder="할일을 입력해주세요."
          defaultValue={todo?.content}
          multiline
        />
        <Button type="submit" variant="contained">
          <div className="font-bold">
            {todo !== null ? todo.id + "번 할잀수정" : "작성"}
          </div>
        </Button>
      </form>
    </>
  );
}

export default WriteTodoPage;
