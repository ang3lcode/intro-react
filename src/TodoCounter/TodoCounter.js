import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import "./TodoCounter.css";

export function TodoCounter(  ){
    const { totalTodos, completedTodos } = React.useContext ( TodoContext );
    
    return(
        <h2 className="TodoCounter"> Has complentado {completedTodos} de {totalTodos} ToDos</h2>
    );
}
