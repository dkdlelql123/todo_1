import { Modal, TextField, Button } from "@mui/material";

function EditTodoModal({ state, todosState, todo }) {
  const submit = (e) => {
    e.preventDefault();

    let form = e.target;
    form.content.value = form.content.value.trim();

    if (form.content.value.length === 0) {
      alert("할일을 입력해주세요");
      return;
    }

    todosState.modifyTodo(todo?.id, form.content.value);
    form.content.value = "";
    form.content.focus();
  };

  return (
    <>
      <Modal
        open={state.open}
        onClose={() => {}}
        aria-labelledby="modal-modal-title"
        className="flex justify-center items-center"
      >
        <div className="bg-white rounded-[20px] p-5 border-0">
          <form onSubmit={submit} className="flex flex-col mt-4 px-4 gap-2">
            <TextField
              rows={4}
              id="content"
              label="todo"
              placeholder="할일을 입력해주세요."
              multiline
              defaultValue={todo?.content}
            />
            <Button type="submit" variant="contained">
              <div className="font-bold">저장</div>
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default EditTodoModal;
