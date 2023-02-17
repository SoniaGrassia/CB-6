/*Avanzato
Crare una todo list personale, con logica in linea a quanto visto a 
lezione e applicando lo stile preferito
*/
import { todos } from "./mocks.js";

const todoGenerator = (todoId, todoText, todoStatus, parent) => {
  const todoIdEl = document.createElement("div");
  const todoTextEl = document.createElement("div");
  const todoStatusEl = document.createElement("p");

  todoIdEl.setAttribute("id", todoId);
  todoIdEl.className = "todo";
  todoTextEl.textContent = todoText;
  todoStatusEl.className = "check";
  todoStatus ? todoStatusEl.classList.add("completed") : null;
  todoIdEl.append(todoTextEl, todoStatusEl);

  todoStatusEl.addEventListener("click", () => {
    todoStatusEl.classList.toggle("uncompleted");
  });

  parent.appendChild(todoIdEl);
};

const bodyEl = document.querySelector("body");
const todoListEl = document.createElement("div");
const todoTitleEl = document.createElement("h1");

todoListEl.className = "todo-list";
todoTitleEl.className = "title";
todoListEl.textContent = "Morning Routine";

bodyEl.append(todoTitleEl, todoListEl);

todos.map((todo) => todoGenerator(todo.id, todo.todo, todo.status, todoListEl));
