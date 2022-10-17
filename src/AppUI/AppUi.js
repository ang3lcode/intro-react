import React from 'react';
import  { TodoCounter } from '../TodoCounter/TodoCounter';
import  { TodoSearch } from '../TodoSearch/TodoSearch';
import  { TodoList } from '../TodoList/TodoList';
import  { TodoItem } from '../TodoItem/TodoItem';
import  { CreateTodoButtom } from '../CreateTodoButton/CreateTodoButton';

export function AppUi ({
    error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return(
        <>
      <p id = "aqui">hola</p>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
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