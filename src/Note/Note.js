import React from 'react';

class Note extends React.Component {
    render() {
        console.log(this.props.note);
        return (
        <div>
            <h3>{this.props.note.name}</h3>
            <p>{this.props.note.content}</p>
            <p>{this.props.note.modified}</p>
        </div>
        )
    }
}

export default Note;