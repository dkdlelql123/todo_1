import { useRef } from "react";
import { atom, useRecoilState } from "recoil";
import dateToStr from "../utils/dateForStr";

const todosAtom = atom({
  key: "app/todosAtom",
  default: [
    {
      regDate: "2023-02-26 20:40:00",
      id: 3,
      content: "명상",
    },
    { regDate: "2023-02-26 20:00:00", id: 2, content: "운동" },
    { regDate: "2023-02-26 20:00:00", id: 1, content: "글쓰기" },
  ],
});

const lastTodoIdAtom = atom({
  key: "app/lastTodoIdAtom",
  default: 3,
});

export function TodosState() {
  const [todos, setTodos] = useRecoilState(todosAtom);
  const [lastTodoId, setLastTodoId] = useRecoilState(lastTodoIdAtom);
  const lastTodoIdRef = useRef(lastTodoId);

  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current;
    setLastTodoId(id);

    const newTodo = {
      id,
      content: newContent,
      regDate: dateToStr(new Date()),
      updateDate: "",
    };

    setTodos([newTodo, ...todos]);
    return newTodo;
  };
  const modifyTodo = (editId, newContent) => {
    const newTodos = todos.map((todo, i) =>
      todo.id !== editId
        ? todo
        : { ...todo, content: newContent, updateDate: dateToStr(new Date()) }
    );
    setTodos(newTodos);
  };
  const removeTodo = (removeId) => {
    const newTodos = todos.filter((e) => e.id !== removeId);
    setTodos(newTodos);
  };
  const findTodoIndexById = (id) => {
    return todos.findIndex((todo) => todo.id === id);
  };
  const findTodoById = (id) => {
    const index = findTodoIndexById(id);
    if (index === -1) return null;
    return todos[index];
  };
  return { todos, addTodo, modifyTodo, removeTodo, findTodoById };
}
