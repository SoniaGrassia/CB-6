import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
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
    setTodoInput("");
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
      <div className="ControlledComponent__add-input">
        <input
          type="submit"
          value="+"
          className="ControlledComponent__btn"
        ></input>
      </div>
    </form>
  );
};

export default ControlledComponent;
