import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';
import NoteActions from '../actions/NoteActions';
import connect from '../libs/connect';


class App extends React.Component {

  addNote = () => {
      this.setState({notes: [...this.state.notes, {id: uuid.v4(), task: 'New task', editing: false}]})
  }

  onDelete = (id) => {
    this.setState({notes: this.state.notes.filter(note => note.id !== id)})
  }

  activateEditNote = (id) => {
    this.setState({notes: this.state.notes.map(note => {
      if(note.id== id) {
        note.editing = true;
      }

      return note
    })})
  }

  editNote = (id, task) => {
    console.log('heure')
    console.log(id);
    console.log('wtf')
    this.setState({notes: this.state.notes.map(note => {
      if(note.id== id) {
        note.editing = false;
        note.task = task;
      }

      return note;
    })})
  }

  render() {
    const {notes} = this.props;

    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes notes={notes} onDelete={this.onDelete} onEdit={this.editNote} onNoteClick={this.activateEditNote}/>
      </div>
    );
  }
}

export default connect(({notes}) => ({
  notes
}), {
  NoteActions
})(App)
