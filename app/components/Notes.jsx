import React from 'react';

export default function({notes, onDelete}) { 
    return (<ul>
            {notes.map(note => 
               <li key={note.id}>{note.task}<button onClick={onDelete.bind(null, note.id)}>x</button></li> 
            )}
            </ul>)
 }