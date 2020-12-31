import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React',
          editing: false
        },
        {
          id: uuid.v4(),
          task: 'Do laundry',
          editing: true
        }
      ]
    };
  }
  addNote = () => {
      this.setState({notes: [...this.state.notes, {id: uuid.v4(), task: 'New task', editing: false}]})
  }

  onDelete = (id) => {
    this.setState({notes: this.state.notes.filter(note => note.id !== id)})
  }

  render() {
    const {notes} = this.state;

    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes notes={notes} onDelete={this.onDelete}/>
      </div>
    );
  }
}