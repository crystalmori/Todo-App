import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/index";

const TodoInput = () => {
  const [todoInput, setTodoInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    //edge case: input is empty or white space
    //!"" === true
    if (!todoInput.trim()) {
      setTodoInput("");
      return;
    }

    addTodo(dispatch)(todoInput);

    // setTodos(...todos, newTodo);

    setTodoInput("");
  };
  return (
    <div>
      <input
        type="text"
        value={todoInput}
        onChange={(event) => setTodoInput(event.target.value)}
      />
      <button className="btn-normal" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
