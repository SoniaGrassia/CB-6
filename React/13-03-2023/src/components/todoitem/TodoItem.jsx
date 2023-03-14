import "./index.css";
import { TiDelete } from "react-icons/ti";

const TodoItem = ({ item, setTodoData }) => {
  const onStatusClick = () => {
    setTodoData((prev) => [
      ...prev.filter((todo) => todo.id !== item.id),
      {
        id: item.id,
        todo: item.todo,
        completed: !item.completed,
      },
    ]);
    // console.log(item);
  };

  //prende l'id del todo cliccato come argomento e lo usa per filtrare l'array
  const deleteTodo = (id) => {
    setTodoData((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="TodoItem">
      <div className="TodoItem__btn-container">
        <TiDelete
          className="TodoItem__btn"
          onClick={() => deleteTodo(item.id)}
        />
      </div>
      <h3 className="TodoItem__title">{item.todo}</h3>
      <p className="TodoItem__status" onClick={onStatusClick}>
        Stato: {item.completed ? "✔️" : "❌"}
      </p>
    </div>
  );
};

export default TodoItem;
