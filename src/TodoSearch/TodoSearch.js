import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import "./TodoSearch.css";


export function TodoSearch(){
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return(
        <input 
            className="TodoSearch"
            placeholder="Cebolla" 
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}