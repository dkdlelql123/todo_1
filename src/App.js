import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage"
import WritePage from "./pages/WritePage"
import TodoListPage from "./pages/TodoListPage"

function App() {
  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="w-1/2 max-w-screen-sm m-auto bg-white min-h-screen px-2">
        <header className="pt-2 flex items-center justify-between text-white">
          <NavLink to={"/list"}  className="p-1 border-2 rounded-md border-sky-900 bg-sky-900 text-xs">리스트</NavLink>
          <NavLink to={"/write"}  className="p-1 border-2 rounded-md border-sky-900 bg-sky-900 text-xs">작성</NavLink>
          <NavLink to={"/todoList"}  className="p-1 border-2 rounded-md border-sky-900 bg-sky-900 text-xs">투두리스트</NavLink>
        </header>
        
        <div className="h-4"></div>

        <Routes>
          <Route path="/list" element={<ListPage />}/>
          <Route path="/write" element={<WritePage />} />
          <Route path="/todoList" element={<TodoListPage />} />
          <Route path="*" element={<Navigate to="/list" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
