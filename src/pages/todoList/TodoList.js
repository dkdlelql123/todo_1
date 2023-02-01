import { useRef, useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState([]);
  const submit = (e) => {
    e.preventDefault();
    
    let form = e.target;
    form.content.value = form.content.value.trim(); 

    if (form.content.value.length === 0) {
      alert("할일을 입력해주세요");
      return;
    }
    
    setTodo([...todo, form.content.value]);
    form.content.value = "";
    form.content.focus();
  }

  return (
    <>
      <h1>작성 페이지</h1>
      <form onSubmit={submit}> 
        <input type="text" id="content" placeholder="할일을 입력해주세요."/>
        <button type="submit" >작성</button>
      </form>
      <div className="mt-8">
        {todo.map((e, i) => (<div key={i} className="flex gap-2"><div>{e}</div><span>2023-02-02 09:00:00</span></div>))}
        </div>
    </>
  );
}

export default TodoList;