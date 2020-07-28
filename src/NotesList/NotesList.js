import React from 'react';
import { Route, Link } from 'react-router-dom';
import Note from '../Note/Note';

class Main extends React.Component {
    render() {
        const folderId = this.props.match.params.folderId;
        let notes = this.props.notes;
        if (folderId) {
            notes = notes.filter(note => {
                return note.folderId === folderId;
            })
        }
        const renderNotes = notes.map(note => {
            return <li>
                    <h3><Link to={`/notes/${note.id}`}>{note.name}</Link></h3>
                </li>
        })
        return (
            <div className="note-list">
                <ul>
                    {renderNotes}
                </ul>
            </div>
        )
    }
}

export default Main;