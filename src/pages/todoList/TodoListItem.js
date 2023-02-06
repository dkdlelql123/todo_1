import { useState } from "react";

function TodoListItem({ todo, index, todosState }) {
  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState(todo.content);

  const onClickRemoveItem = () => todosState.removeTodo(index);
  const onClickModifyItem = () => {
    setEditMode(true);
  };

  const editSuccess = () => {
    setEditMode(false);
  };

  const editCancle = () => {
    setEditContent(todo.content);
    setEditMode(false);
  };

  return (
    <>
      <li className="flex gap-2">
        <span>{todo.id}</span>
        <span>{todo.regDate}</span>

        {editMode || (
          <>
            <span>{todo.content}</span>
            <button onClick={onClickModifyItem}>수정</button>
            <button onClick={onClickRemoveItem}>삭제</button>
          </>
        )}

        {editMode && (
          <>
            <input
              type="text"
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              placeholder="할일을 입력해주세요."
            />
            <button onClick={editSuccess}>수정완료</button>
            <button onClick={editCancle}>취소</button>
          </>
        )}
      </li>
    </>
  );
}

export default TodoListItem;
