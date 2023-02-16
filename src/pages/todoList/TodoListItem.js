import { useRef, useState } from "react";
import { Chip, ButtonGroup, Button, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

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
            <div className="shadow rounded-[22px] flex">
              <Button
                className={`flex-shrink-0  !items-start !rounded-[22px_0_0_22px] `}
              >
                <span
                  className={` flex items-center h-[60px] ${
                    todo.id % 2 === 0
                      ? `text-[color:var(--mui-color-primary-main)]`
                      : `text-gray-400`
                  }`}
                >
                  <FontAwesomeIcon icon={faCheck} className="check" size="2x" />
                </span>
              </Button>
              <div className="flex-1 bg-blue-200 whitespace-pre-wrap leading-relaxed hover:text-[color:var(--mui-color-primary-main)]">
                {todo.content}
              </div>
              <Button
                className={`flex-shrink-0 !items-start justify-center !rounded-[0_22px_22px_0] w-[30px] `}
                color="inherit"
              >
                <span className="text-gray-400 flex items-center h-[60px]">
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    className="check"
                    size="lg"
                  />
                </span>
              </Button>
            </div>

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
