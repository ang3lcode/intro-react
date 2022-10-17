import React from 'react';
import { AppUi } from "./AppUI/AppUi";
import { TodoProvider } from './TodoContext/TodoContext';
import './App.css';


export function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}


