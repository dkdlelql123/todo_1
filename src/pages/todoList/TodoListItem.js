import { useRef, useState } from "react";
import Btn from "../../utils/Button";
import { Chip, ButtonGroup, Button, TextField } from "@mui/material";

function TodoListItem({ todo, index, todosState }) {
  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState(todo.content);
  const editContentInputRef = useRef(null);

  const onClickRemoveItem = () => todosState.removeTodo(index);
  const onClickModifyItem = () => {
    setEditMode(true);
  };

  const editSuccess = () => {
    if (editContent.trim().length === 0) {
      alert("할일을 입력해주세요");
      return;
    }

    todosState.modifyTodo(index, editContent);
    setEditMode(false);
  };

  const editCancle = () => {
    setEditContent(todo.content);
    setEditMode(false);
  };

  return (
    <>
      <li className="flex flex-col gap-2 mt-10">
        <div className="flex gap-2 items-center">
          <Chip variant="outlined" size="small" label={`번호 : ${todo.id}`} />
          <Chip
            variant="outlined"
            color="primary"
            size="small"
            label={todo.updateDate === "" ? todo.regDate : todo.updateDate}
          />
        </div>

        {editMode || (
          <>
            <span className="p-4 shadow rounded-sm border whitespace-pre-wrap leading-relaxed ">
              {todo.content}
            </span>

            <ButtonGroup size="small" aria-label="small button group">
              <Button variant="contained" onClick={onClickModifyItem}>
                수정
              </Button>
              <Button variant="contained" onClick={onClickRemoveItem}>
                삭제
              </Button>
            </ButtonGroup>
          </>
        )}

        {editMode && (
          <>
            <TextField
              type="text"
              label="할일을 입력해주세요"
              id={editContentInputRef}
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              multiline
            />
            <ButtonGroup size="small" aria-label="small button group">
              <Button variant="contained" onClick={editSuccess}>
                수정완료
              </Button>
              <Button variant="contained" onClick={editCancle}>
                취소
              </Button>
            </ButtonGroup>
          </>
        )}
      </li>
    </>
  );
}

export default TodoListItem;
