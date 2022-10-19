import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/Deletelcon';
import "./TodoItem.css";

export function TodoItem(props){
    return(
        <li className='TodoItem'>
            <CompleteIcon
                completed={props.completed}
                onComplete={props.onComplete}
            />
            <p
                className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
            >
                {props.text}
            </p>
            <DeleteIcon
                onDelete={props.onDelete}
            />
        </li>
    );
}

