import { Tab, Tabs } from "@mui/material";
import { useState, useMemo } from "react";
import NewTodoForm from "./todoList/NewTodoForm";
import NoticeSnackBar from "./todoList/NoticeSnackBar";
import OptionDrawer from "./todoList/OptionDrawer";
import TodoList from "./todoList/TodoList";

function useTodoDrawerState() {
  const [itemId, setItemId] = useState(null);
  const opened = useMemo(() => itemId !== null, [itemId]);
  const close = () => setItemId(null);
  const open = (id) => setItemId(id);
  return { itemId, opened, close, open };
}

function ListPage() {
  const todoOptionDrawerState = useTodoDrawerState();
  const [currentTab, clickTab] = useState(0);
  const menuArr = [
    { name: "all", content: "Tab menu ONE" },
    { name: "미완료", content: "Tab menu TWO" },
    { name: "완료", content: "Tab menu THREE" },
  ];
  const selectMenuHandler = (index) => {
    // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
    // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
    clickTab(index);
  };
  return (
    <>
      <OptionDrawer state={todoOptionDrawerState} />
      <NoticeSnackBar />

      <Tabs value={currentTab} centered>
        {menuArr.map((menu, idx) => (
          <Tab
            key={idx}
            label={menu.name}
            value={menu.idx}
            onClick={() => selectMenuHandler(idx)}
          />
        ))}
      </Tabs>

      <TodoList todoOptionDrawerState={todoOptionDrawerState} />
    </>
  );
}

export default ListPage;
