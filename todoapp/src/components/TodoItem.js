import "./styles/todo-item.css";

const TodoItem = ({ content, isCompleted, index, setTodos }) => {
  //1. trigger double click event
  //2. setTdos change state accordingly
  //3. updated todos will be passed into TodoItem
  const modTodo = (index) => {
    setTodos((prev) => {
      return prev.map((todo, i) => {
        if (i !== index) {
          return todo;
        }

        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      });
    });
  };

  const delTodo = (index) => {
    // const todos = [];
    // newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];
    // setTodos(newTodos);

    setTodos((prev) => {
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  return (
    <li className="todo-item">
      <span
        onDoubleClick={() => modTodo(index)}
        className={isCompleted ? "task-done" : "tast-imcompleted"}
      >
        {content}
      </span>{" "}
      <button onClick={() => delTodo(index)} className="btn-normal">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
