import { useState } from "react";

const TodoInput = ({ setTodos, todos }) => {
  const [todoInput, setTodoInput] = useState("");
  const addTodo = () => {
    //edge case: input is empty or white space
    //!"" === true
    if (!todoInput.trim()) {
      setTodoInput("");
      return;
    }

    const newTodo = {
      content: todoInput,
      isCompleted: false,
    };

    // setTodos(...todos, newTodo);

    setTodos((prev) => {
      return [...prev, newTodo];
    });

    setTodoInput("");
  };
  return (
    <div>
      <input
        type="text"
        value={todoInput}
        onChange={(event) => setTodoInput(event.target.value)}
      />
      <button className="btn-normal" onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
