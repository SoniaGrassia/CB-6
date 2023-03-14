import { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/todolist";
import ControlledComponent from "./components/controlledComponent";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then(({ todos }) => setTodos(todos));
  }, []);

  return (
    <div className="App">
      <ControlledComponent setTodoData={setTodos} />
      <TodoList todoData={todos} setTodoData={setTodos} />
    </div>
  );
}

export default App;
