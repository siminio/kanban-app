import uuid from 'uuid';
import NoteActions from '../actions/NoteActions';

export default class NoteStore {
  constructor() {
    this.bindActions(NoteActions);

    this.notes = [
      {
        id: uuid.v4(),
        task: 'Learn React'
      },
      {
        id: uuid.v4(),
        task: 'Do laundry'
      }
    ];
  }

  create(note) {
    console.log('created note', note);
  }
  update(note) {
    console.log('updated note', note);
  }
  delete(note) {
    console.log('deleted note', note);
  }
}