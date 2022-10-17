import React from 'react';
import "./CreateTodoButton.css";

export function CreateTodoButtom(props){
    const onClickButton = () => {
        props.setOpenModal(true);
    };
      
    return(
            // {/* ✅ */}
        <button
        className="CreateTodoButton"
        onClick={onClickButton}
        >
        +
        </button>
    );   
}