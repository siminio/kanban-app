import uuid from 'uuid';
import NoteActions from '../actions/NoteActions';

export default class NoteStore {
  constructor() {
    this.bindActions(NoteActions);

    this.notes = [
      {
        id: uuid.v4(),
        task: 'Learn React',
        editing: false
      },
      {
        id: uuid.v4(),
        task: 'Do laundry',
        editing: false
      }
    ];
  }

  create(note) {
    this.setState({notes: this.notes.concat(note)});
  }
  update(updatedNote) {
    this.setState({notes: this.notes.map(note => {
      if(note.id== updatedNote.id) {
        return Object.assign({}, note, updatedNote)
      }

      return note;
    })})
  }
  delete(noteId) {
    this.setState({notes: this.notes.filter(note => note.id !== noteId)})
  }
}