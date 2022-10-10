import { useEffect } from "react";
import { useDispatch } from "react-redux";

import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { initTodos } from "./actions";
import "./App.css";

//1. dispatch an action
//2. thunk intercept the action and execute the acync operations/tasks. Then it will send actions to reducer when async tasks is completed
//3. reducer will update the state by type and payload

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    initTodos(dispatch)();
  }, [dispatch]);
  return (
    <div className="App">
      <TodoHeader headerTextContent="Todo" />
      <hr />
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
