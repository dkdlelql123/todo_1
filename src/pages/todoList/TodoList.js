import { useRef, useState } from "react";
import NewTodoForm from "./NewTodoForm";

function useTodosState() {
  const [todos, setTodos] = useState([]);
  const lastTodoIdRef = useRef(0);

  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current;
    const newTodo = {
      id,
      content: newContent,
      regDate: "2023-02-02 09:00:00",
    };

    setTodos([...todos, newTodo]);
  };
  const modifyTodo = () => {
    alert("수정");
  };
  const removeTodo = (index) => {
    alert("삭제");
  };
  return { todos, addTodo, modifyTodo, removeTodo };
}

function TodoList() {
  const todosState = useTodosState();
  return (
    <>
      <h1>TODOLIST</h1>
      <NewTodoForm todosState={todosState} />
      <div className="mt-8">
        {todosState.todos.map((e, i) => (
          <div key={i} className="flex gap-2">
            <div>{e.content}</div>
            <span>{e.regDate}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoList;
