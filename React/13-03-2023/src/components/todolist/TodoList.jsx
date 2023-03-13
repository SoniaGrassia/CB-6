import "./index.css";
import { useState, useEffect } from "react";
import TodoItem from "../todoitem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then(({ todos }) => setTodos(todos));
    // console.log(todos);
  }, []);

  const changeValueInput = (e) => {
    setTodoInput(e.target.value);
  };

  const onHanldeSubmit = (e) => {
    e.preventDefault();
    setTodoInput(
      todos.unshift({
        id: todos.length + 1,
        todo: todoInput,
      })
    );
    // console.log(todoInput);
    // console.log(todos);
  };

  return (
    <div className="TodoList">
      <form className="TodoList__form" onSubmit={onHanldeSubmit}>
        <input
          className="TodoList__todo"
          //dopo aver aggiunto il todo alla lista il value si trasforma
          //nell'id del todo e rimane fisso nella input //TODO:TOGLIERLO.
          value={todoInput}
          onChange={changeValueInput}
          type="text"
          placeholder="Todo..."
        />

        <button className="TodoList__btn">Aggiungi</button>
      </form>
      {todos.map((todo) => (
        <TodoItem todoData={todo} key={todo.id} />
      ))}
    </div>
  );
};
export default TodoList;
