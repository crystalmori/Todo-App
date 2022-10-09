import { useDispatch } from "react-redux";
import { modTodo, delTodo } from "../actions/index";
import "./styles/todo-item.css";

const TodoItem = ({ content, isCompleted, index, setTodos }) => {
  //1. trigger double click event
  //2. setTdos change state accordingly
  //3. updated todos will be passed into TodoItem

  const dispatch = useDispatch();

  return (
    <li className="todo-item">
      <span
        onDoubleClick={() => modTodo(dispatch)(index)}
        className={isCompleted ? "task-done" : "tast-imcompleted"}
      >
        {content}
      </span>{" "}
      <button onClick={() => delTodo(dispatch)(index)} className="btn-normal">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
