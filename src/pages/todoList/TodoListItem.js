import { Chip, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function TodoListItem({ todo, index, openDrawer, onCompletedBtnClick }) {
  return (
    <>
      <li className="flex flex-col gap-2 mt-4">
        <div className="flex gap-2 items-center">
          <Chip variant="outlined" size="small" label={`번호 : ${todo.id}`} />
          <Chip
            variant="outlined"
            color="primary"
            size="small"
            label={todo.dueDate}
          />
        </div>

        <div className="shadow rounded-[22px] flex">
          <Button
            onClick={() => onCompletedBtnClick(todo.id)}
            className={`flex-shrink-0  !items-start !rounded-[22px_0_0_22px] `}
          >
            <span
              className={` flex items-center h-[60px] ${
                todo.completed === true
                  ? `text-[color:var(--mui-color-primary-main)]`
                  : `text-gray-400`
              }`}
            >
              <FontAwesomeIcon icon={faCheck} className="check" size="2x" />
            </span>
          </Button>
          <div className="flex-shrink-0 bg-gray-300 w-[2px] my-4 mr-4"></div>
          <div className="flex-1 flex items-center  whitespace-pre-wrap leading-relaxed hover:text-[color:var(--mui-color-primary-main)]">
            {todo.content}
          </div>
          <Button
            className={`flex-shrink-0 !items-start justify-center !rounded-[0_22px_22px_0] w-[30px] `}
            color="inherit"
            onClick={() => openDrawer(todo.id)}
          >
            <span className="text-gray-400 flex items-center h-[60px]">
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                className="check"
                size="lg"
              />
            </span>
          </Button>
        </div>
      </li>
    </>
  );
}

export default TodoListItem;
