import './App.css';
import TodoAddElement from './TodoAddElement';
import TodoCount from './TodoCount';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import { useState, useEffect } from 'react';

function App() {


    
    const [todoList, setTodoList] = useState(() => {
        const json = window.localStorage.getItem("TODO_LIST");
        if (json) {
            return JSON.parse(json);
        }
        return [];
    });

    const [todoText, setTodoText] = useState("");

    var conteoCompletadas = 0;
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].completed) {
        conteoCompletadas++;
      }
    }

    function deleteTodo(todo) {
        const copy = [...todoList]
        copy.splice(copy.indexOf(todo), 1);
        setTodoList(copy);
        localStorage.setItem("TODO_LIST", JSON.stringify(copy));
    }

    function completeTodo(todo) {
        const copy = [...todoList]
        copy[copy.indexOf(todo)].completed = true;
        setTodoList(copy);
        localStorage.setItem("TODO_LIST", JSON.stringify(copy));
    }

    function onAddTodo() {
      const copy = [...todoList]
      copy.push({ name: todoText, completed: false});
      setTodoList(copy);
      setTodoText("");
      localStorage.setItem("TODO_LIST", JSON.stringify(copy));
    }
  return (
    <div>
      <TodoCount total={todoList.length} completed={conteoCompletadas} />

      <TodoInput todoText={todoText} setTodoText={setTodoText} />
      <TodoList>
        {todoList.map((pendiente => {
          return (
            <TodoItem todoItem={pendiente}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}/>
          );
        }))}
      </TodoList>

      <TodoAddElement onAddTodo={onAddTodo}  />
    </div>
  )
}

export { App };


