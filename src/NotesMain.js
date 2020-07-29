import React from 'react';
import { Link } from 'react-router-dom';


class NotesMain extends React.Component {
  render() {
    console.log(this.props.notes);
    let notes = this.props.notes;
    const folderId = this.props.match.params.folderId;
    if (folderId){
        notes = notes.filter(note => note.folderId === folderId)
    }
    const renderedNotes = notes.map(note => (
      <div><Link to="/">
        {note.name}
      </Link>
      </div>
    ))
    return (
      <div>
          {renderedNotes}
      </div>
    )

  }
}

export default NotesMain;