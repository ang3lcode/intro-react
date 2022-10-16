import React from 'react'
import './App.css';
import  { TodoCounter } from './TodoCounter/TodoCounter';
import  { TodoSearch } from './TodoSearch/TodoSearch';
import  { TodoList } from './TodoList/TodoList';
import  { TodoItem } from './TodoItem/TodoItem';
import  { CreateTodoButtom } from './CreateTodoButton/CreateTodoButton';


const todos=[
  {text:'Cortar cebolla', completed:true},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];

export function App() {
  return (
    <>
      <p id = "aqui">hola</p>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todo => (   
        <TodoItem 
            key = { todo.text } 
            text = { todo.text }
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButtom/>
    </>
  );
}


