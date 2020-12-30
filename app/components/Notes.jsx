import React from 'react';

export default function({notes}) { 
    return (<ul>
            {notes.map(note => 
               <li key={note.id}>{note.task}</li> 
            )}
            </ul>)
 }