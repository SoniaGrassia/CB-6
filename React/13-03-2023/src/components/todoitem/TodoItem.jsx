import { useState } from "react";
import "./index.css";

const TodoItem = ({ todoData }) => {
  const { todo, completed } = todoData;
  const [todoStatus, setTodoStatus] = useState(completed);

  const onStatusClick = () => {
    setTodoStatus((prev) => !prev);
  };

  return (
    <div className="TodoItem">
      <h3 className="TodoItem__title">{todo}</h3>
      <p className="TodoItem__status" onClick={onStatusClick}>
        Stato: {todoStatus ? "✔️" : "❌"}
      </p>
    </div>
  );
};

export default TodoItem;
