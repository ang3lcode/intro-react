import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext'
import  { TodoCounter } from '../TodoCounter/TodoCounter';
import  { TodoSearch } from '../TodoSearch/TodoSearch';
import  { TodoList } from '../TodoList/TodoList';
import  { TodoItem } from '../TodoItem/TodoItem';
import  { CreateTodoButtom } from '../CreateTodoButton/CreateTodoButton';

export function AppUi () {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
  } = React.useContext(TodoContext);

  return(
    <>
      <p id = "aqui">hola</p>
      <TodoCounter/>
      <TodoSearch/>
      
        <TodoList>
          {error && <p>exploto...</p>}
          {loading && <p>Estamos cargando</p>}
          {(!loading && !searchedTodos.length ) &&<p>crea tu primer ToDo</p>}

          {searchedTodos.map(todo => (   
            <TodoItem 
              key = { todo.text } 
              text = { todo.text }
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

      <CreateTodoButtom/>
    </>
  );
}