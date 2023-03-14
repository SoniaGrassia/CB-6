import { useState } from "react";
import "./index.css";

const ControlledComponent = ({ setTodoData }) => {
  const [todoInput, setTodoInput] = useState("");

  const changeValueInput = (e) => {
    setTodoInput(e.target.value);
  };

  const onHanldeSubmit = (e) => {
    e.preventDefault();
    setTodoData((prev) => {
      if (
        !prev.find(
          (item) => item.todo.toLowerCase() === todoInput.toLowerCase()
        )
      ) {
        return [
          ...prev,
          {
            id: prev.length + 1,
            todo: todoInput,
            completed: false,
          },
        ];
      } else {
        alert("Todo già esistente");
        return prev;
      }
    });
  };

  return (
    <form className="ControlledComponent" onSubmit={onHanldeSubmit}>
      <input
        className="ControlledComponent__todo"
        value={todoInput}
        onChange={changeValueInput}
        type="text"
        placeholder="Todo..."
      />

      <input
        type="submit"
        className="ControlledComponent__btn"
        value="+"
      ></input>
    </form>
  );
};

export default ControlledComponent;
