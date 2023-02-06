import { useRef, useState } from "react";

function TodoListItem({ todo, index, todosState }) {
  const onClickRemoveItem = () => todosState.removeTodo(index);
  return (
    <>
      <li className="flex gap-2">
        <span>{todo.id}</span>
        <span>{todo.regDate}</span>
        <span>{todo.content}</span>
        <button className="btn" onClick={onClickRemoveItem}>
          삭제
        </button>
      </li>
    </>
  );
}

export default TodoListItem;
