import { Button } from "@mui/material";
import { TodosState } from "../../states";
import TodoListItem from "./TodoListItem";
import { NavLink } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

function TodoList({ todoOptionDrawerState }) {
  const todosState = TodosState();
  const onCompletedBtnClick = (id) => todosState.toggleCompletedById(id);

  const [currentTab, clickTab] = useState(0);
  const menuArr = [
    { name: "all", value: 0, option: "all" },
    { name: "미완료", value: -1, option: "notComplete" },
    { name: "완료", value: 1, option: "complete" },
  ];

  const getFilterTodos = () => {
    if (currentTab === -1) {
      return todosState.todos.filter((todo, _i) => todo.completed === false);
    } else if (currentTab === 1) {
      return todosState.todos.filter((todo, _i) => todo.completed === true);
    }

    return todosState.todos;
  };

  const filteredTodos = getFilterTodos();

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (a.dueDate === b.dueDate) return 0;
    return a.dueDate > b.dueDate ? 1 : -1;
  });

  const selectMenuHandler = (index) => {
    // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
    // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
    currentTab !== index && clickTab(index);
  };

  return (
    <>
      {todosState.todos.length === 0 ? (
        <>
          <div className="flex flex-1 flex-col gap-2 justify-center items-center ">
            <div className="text-[color:var(--mui-color-text-primary)] text-sm">
              <span className="text-[color:var(--mui-color-primary-main)]">
                할일
              </span>
              을 입력해주세요.
            </div>
            <Button variant="contained" component={NavLink} to={"/writeTodo"}>
              <div>할일 작성하기</div>
            </Button>
          </div>
        </>
      ) : (
        <>
          {/* <NewTodoForm /> */}

          <Tabs value={currentTab} centered variant="fullWidth">
            {menuArr.map((menu, _idx) => (
              <Tab
                key={_idx}
                label={menu.name}
                value={menu.value}
                onClick={() => selectMenuHandler(menu.value)}
              />
            ))}
          </Tabs>
          <div className="mt-4 px-4 t-8">
            <ul>
              {sortedTodos.map((todo, i) => (
                <TodoListItem
                  key={i}
                  todo={todo}
                  index={i}
                  openDrawer={todoOptionDrawerState.open}
                  onCompletedBtnClick={onCompletedBtnClick}
                />
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default TodoList;
