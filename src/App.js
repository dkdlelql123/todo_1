import {
  Navigate,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ListPage from "./pages/ListPage";
import WritePage from "./pages/WritePage";
import TodoListPage from "./pages/TodoListPage";

function App() {
  const location = useLocation();
  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="root w-1/2 max-w-screen-sm m-auto bg-white min-h-screen">
        <Routes>
          <Route path="/list" element={<ListPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/todoList" element={<TodoListPage />} />
          <Route path="*" element={<Navigate to="/todoList" />} />
        </Routes>

        {location.pathname.split("/")[1] !== "todoList" && (
          <footer className="pt-2 flex items-center gap-2">
            <NavLink to={"/list"} className=" text-xs text-[20px]">
              리스트
            </NavLink>
            <NavLink
              to={"/write"}
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
