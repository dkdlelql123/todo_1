import { useRef, useState } from "react";
import NewTodoForm from "./NewTodoForm";
import dateToStr from "../../utils/dateForStr";

function useTodosState() {
  const [todos, setTodos] = useState([]);
  const lastTodoIdRef = useRef(0);

  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current;
    const newTodo = {
      id,
      content: newContent,
      regDate: dateToStr(new Date()),
    };

    setTodos([...todos, newTodo]);
  };
  const modifyTodo = () => {
    alert("수정");
  };
  const removeTodo = (index) => {
    const newTodos = todos.filter((e, i) => i !== index);
    setTodos(newTodos);
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
        {todosState.todos.map((e, i) => {
          return (
            <div key={i} className="flex gap-2">
              <div>{e.content}</div>
              <span>{e.regDate}</span>
              <span onClick={() => todosState.removeTodo(i)}>삭제</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TodoList;
