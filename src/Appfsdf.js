import './App.css';
import TodoAddElement from './TodoAddElement';
import TodoCount from './TodoCount';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([{ name: "Hacer el proyecto de DAW", completed: true }, 
    { name: "Trabajar", completed: false }, { name: "Probar mi proyecto", completed: false }]);

    const [todoText, setTodoText] = useState("");

    var conteoCompletadas = 0;
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].completed) {
        conteoCompletadas++;
      }
    }

    function onAddTodo() {
      const copy = [...todoList]
      copy.push({ name: todoText, completed: false});
      setTodoList(copy);
    }
  return (
    <div>
      <TodoCount total={todoList.length} completed={conteoCompletadas} />

      <TodoInput todoText={todoText} setTodoText={setTodoText} />
      <TodoList>
        {todoList.map((pendiente => {
          return (
            <TodoItem name={pendiente.name} completed={pendiente.completed} />
          );
        }))}
      </TodoList>

      <TodoAddElement onAddTodo={onAddTodo}  />
    </div>
  )
}

export { App };


