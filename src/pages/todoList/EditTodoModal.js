import { Modal, TextField, Button } from "@mui/material";

function EditTodoModal({ drawerState, todosState, state, todo }) {
  const submit = (e) => {
    e.preventDefault();

    let form = e.target;
    form.content.value = form.content.value.trim();

    if (form.content.value.length === 0) {
      alert("할일을 입력해주세요");
      return;
    }

    //drawerState.close();
    state.handleClose();
  };

  return (
    <>
      <Modal
        open={state.open}
        onClose={() => {}}
        aria-labelledby="modal-modal-title"
        className="flex justify-center items-center"
      >
        <div className="bg-white rounded-[12px] p-4 pb-6 border-0">
          <form onSubmit={submit} className="flex flex-col mt-4 px-4 gap-2">
            <TextField
              rows={5}
              id="content"
              label="todo"
              placeholder="할일을 입력해주세요."
              multiline
              defaultValue={todo?.content}
              className=" w-[400px]"
            />
            <Button type="submit" variant="contained">
              <div>저장</div>
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default EditTodoModal;
