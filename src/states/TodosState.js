import { useRef } from "react";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import dateToStr from "../utils/dateForStr";

const { persistAtom: persistAtomTodo } = recoilPersist();
const { persistAtom: persistAtomLastId } = recoilPersist();

const todosAtom = atom({
  key: "app/todosAtom",
  default: [],
  effects_UNSTABLE: [persistAtomTodo],
});

const lastTodoIdAtom = atom({
  key: "app/lastTodoIdAtom",
  default: 0,
  effects_UNSTABLE: [persistAtomLastId],
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
