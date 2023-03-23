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

  const addTodo = (newContent, newDueDate) => {
    const id = ++lastTodoIdRef.current;
    setLastTodoId(id);

    const newTodo = {
      id,
      content: newContent,
      completed: false,
      regDate: dateToStr(new Date()),
      updateDate: "",
      dueDate: newDueDate,
    };

    setTodos([newTodo, ...todos]);
    return newTodo;
  };
  const modifyTodo = (editId, editContent, editDueDate) => {
    const newTodos = todos.map((todo, i) =>
      todo.id !== editId
        ? todo
        : {
            ...todo,
            content: editContent,
            updateDate: dateToStr(new Date()),
            dueDate: editDueDate,
          }
    );
    setTodos(newTodos);
  };
  const removeTodo = (removeId) => {
    const newTodos = todos.filter((e) => e.id !== removeId);
    setTodos(newTodos);
  };
  const findTodoIndexById = (id) => {
    //console.log(todos);
    return todos.findIndex((todo) => todo.id === id);
  };
  const findTodoById = (id) => {
    if (typeof id != "number") id = parseInt(id);
    const index = findTodoIndexById(id);
    //console.log("index:" + index);
    if (index === -1) return null;
    return todos[index];
  };
  const toggleCompletedById = (id) => {
    const index = findTodoIndexById(id);
    if (index === -1) return null;
    console.log(index);

    const newTodos = todos.map((todo, i) =>
      i !== index ? todo : { ...todo, completed: !todo.completed }
    );
    setTodos(newTodos);
  };

  return {
    todos,
    addTodo,
    modifyTodo,
    removeTodo,
    findTodoIndexById,
    findTodoById,
    toggleCompletedById,
  };
}
