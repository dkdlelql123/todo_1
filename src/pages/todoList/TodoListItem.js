import { useRef, useState } from "react";

function TodoListItem({ todo, index }) {
  return (
    <>
      <li className="flex gap-2">
        <span>{todo.id}</span>
        <span>{todo.regDate}</span>
        <span>{todo.content}</span>
      </li>
    </>
  );
}

export default TodoListItem;
