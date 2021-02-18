import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';
import NoteActions from '../actions/NoteActions';
import connect from '../libs/connect';


class App extends React.Component {

  addNote = () => {
    this.props.NoteActions.create({id: uuid.v4(), task: 'New task', editing: false});
  }

  onDelete = (id) => {
    this.props.NoteActions.delete(id);
  }

  activateEditNote = (id) => {
    this.props.NoteActions.update({id: id, editing: true})
  }

  editNote = (id, task) => {
    this.props.NoteActions.update({id: id, editing: false, task: task})
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
