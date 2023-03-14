import "./index.css";
import TodoItem from "../todoitem";

const TodoList = ({ todoData, setTodoData }) => {
  // console.log(todoData);
  return (
    <div className="TodoList">
      {todoData
        .sort((item1, item2) => (item1.id <= item2.id ? 1 : -1))
        .map((item) => (
          <TodoItem item={item} setTodoData={setTodoData} key={item.id} />
        ))}
    </div>
  );
};
export default TodoList;
