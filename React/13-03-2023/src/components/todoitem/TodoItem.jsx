import "./index.css";

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
      <input type="button" value="-" onClick={() => deleteTodo(item.id)} />
      <h3 className="TodoItem__title">{item.todo}</h3>
      <p className="TodoItem__status" onClick={onStatusClick}>
        Stato: {item.completed ? "✔️" : "❌"}
      </p>
    </div>
  );
};

export default TodoItem;
