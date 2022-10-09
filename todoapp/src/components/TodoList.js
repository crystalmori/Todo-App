import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state);
  const todoList = todos.map(({ content, isCompleted }, index) => {
    return (
      <TodoItem
        key={`${content}-${index}`}
        content={content}
        isCompleted={isCompleted}
        index={index}
      />
    );
  });
  return <ul>{todoList}</ul>;
};

export default TodoList;
