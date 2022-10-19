import React from 'react';
import { AppUi } from "./AppUi";
import { TodoProvider } from '../TodoContext/TodoContext';


export function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}


