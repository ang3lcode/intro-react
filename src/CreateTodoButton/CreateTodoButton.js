import React from 'react';
import "./CreateTodoButton.css";

export function CreateTodoButtom(props){
    const onClickButton = (msg) => {
        alert(msg);
    };
    return(
            // {/* ✅ */}
            <button
            className="CreateTodoButton"
            onClick={() => onClickButton('Aquí se debería abrir el modal')}
            >
            +
        </button>
    );   
}