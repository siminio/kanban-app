import React from 'react';


export default class Edit extends React.Component {
   render() {
      const {notes, onDelete, onEdit, onNoteClick} = this.props;

      return (<ul>
         {notes.map(note => 
            <li key={note.id}>
               {note.editing && <input type="text" onKeyPress={this.checkEnter.bind(null, note.id)} defaultValue={note.task} />}
               {!note.editing && <div onClick={onNoteClick.bind(null, note.id)}>{note.task}</div>}
               <button onClick={onDelete.bind(null, note.id)}>x</button>
            </li> 
         )}
         </ul>);
   }
   
   checkEnter = (id, e) => {
      if(e.key === 'Enter') {
        this.finishEdit(id, e);
      }
   }

   finishEdit = (id, e) => {
      const value = e.target.value;
      console.log(value);
      console.log(id)

      this.props.onEdit(id, value);
   }
}