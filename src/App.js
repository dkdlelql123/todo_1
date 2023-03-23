import {
  Navigate,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import TodoListPage from "./pages/TodoListPage";
import WriteTodoPage from "./pages/todoList/WriteTodoPage";
import { AppBar, Toolbar } from "@mui/material";

function App() {
  const location = useLocation();

  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="root lg:w-1/2 sm:w-full max-w-screen-sm m-auto bg-white min-h-screen">
        <AppBar position="static">
          <Toolbar className="flex justify-around">
            <div className="flex-1"></div>
            <div className="font-bold text-lg">TODOLIST</div>
            <div className="flex-1 text-right text-sm">
              {location.pathname !== "/todoList" ? (
                <NavLink to="/todoList">목록으로</NavLink>
              ) : (
                <NavLink to="/writeTodo">글쓰기</NavLink>
              )}
            </div>
          </Toolbar>
        </AppBar>

        <Routes>
          {/* <Route path="/list" element={<ListPage />} /> */}
          <Route path="/writeTodo" element={<WriteTodoPage />} />
          <Route path="/edit/:id" element={<WriteTodoPage />} />
          <Route path="/todoList" element={<TodoListPage />} />
          <Route path="*" element={<Navigate to="/todoList" />} />
        </Routes>

        {/* 화면이 아래에 닿지 않도록 */}
        <div className="min-h-[200px]"></div>

        {location.pathname.split("/")[1] === "main" && (
          <footer className="pt-2 flex items-center gap-2">
            <NavLink to={"/list"} className=" text-xs text-[20px]">
              리스트
            </NavLink>
            <NavLink
              to={"/writeTodo"}
              className=" text-xs first-letter:text-[23px] first-letter:hover:text-[red]"
            >
              작성
            </NavLink>
            <NavLink
              to={"/todoList"}
              className=" text-lg font-bold before:content-['---'] text-[color:var(--color-3)]"
            >
              투두리스트
            </NavLink>
          </footer>
        )}
      </div>
    </div>
  );
}

export default App;
