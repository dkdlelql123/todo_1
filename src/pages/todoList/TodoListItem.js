import { useRef, useState } from "react";

function TodoListItem({ todo, index, todosState }) {
  const [editMode, setEditMode] = useState(false);

  const onClickRemoveItem = () => todosState.removeTodo(index);
  const onClickModifyItem = () => {
    setEditMode(true);
  };

  return (
    <>
      <li className="flex gap-2">
        <span>{todo.id}</span>

        {editMode == false ? (
          <>
            <span>{todo.regDate}</span>
            <span>{todo.content}</span>
            <button className="btn" onClick={onClickModifyItem}>
              수정
            </button>
            <button className="btn" onClick={onClickRemoveItem}>
              삭제
            </button>
          </>
        ) : (
          <>
            <span>{todo.content}</span>
            <button className="btn" onClick={onClickModifyItem}>
              수정완료
            </button>
          </>
        )}
      </li>
    </>
  );
}

export default TodoListItem;
