import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import Main from './NotesList/NotesList';
import Note from './Note/Note';
import dummyStore from './dummy-store';

class App extends React.Component {
  state = {
    notes: dummyStore.notes,
    folders: dummyStore.folders
  };

  getNotes = (notes, folderId) => {
    return (!folderId) ? notes : notes.filter(note => note.folderId === folderId);
  }

  getNote = (notes, noteId) => {
    return (!noteId) ? notes : notes.find(note => note.id === noteId);
  }

  getFolder = (folders, folderId) => {
    return (!folderId) ? folders : folders.find(filder => folders.id === folderId);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1><Link to="/">Noteful</Link></h1>
        </header>
        <main>
          {['/', '/folder/:folderId'].map(path => {
            return <Route
              exact
              key={path}
              path={path}
              render={(routeProps) => {
                return <SideBar
                  folders={this.state.folders}
                  notes={this.state.notes}
                  {...routeProps}/>
              }
            }/>
          })}


          <Route
            exact
            path={["/", "/folder/:folderId"]}
            render={(routeProps) => {
            return <Main
              folders={this.state.folders}
              notes={this.state.notes}
              {...routeProps}/>
          }}/>

          
          <Route
            exact
            path="/notes/:noteId"
            render={(routeProps) => {
              console.log(routeProps.match.params);
              const note = this.getNote(this.state.notes, routeProps.match.params.noteId);
              return <Note {...routeProps} note={note}/>
            }}/>
        </main>
      </div>
    );
  }
}

export default App;
