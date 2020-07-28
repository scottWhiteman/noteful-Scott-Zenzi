import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import Main from './Main/Main';
import dummyStore from './dummy-store';

class App extends React.Component {
  state = {
    notes: dummyStore.notes,
    folders: dummyStore.folders
  };

  getNotes = (notes, folderId) => {
    return (!folderId) ? notes : notes.filter(note => note.folderId === folderId);
  }

  getFolder = (folders, folderId) => {
    return (!folderId) ? folders : folders.find(filder => folders.id === folderId);
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header>
          <h1>Noteful</h1>
        </header>
        <main>
          {['/', '/folder/:folderId'].map(path => {
            console.log(path);
            return <Route
              exact
              key={path}
              path={path}
              render={(routeProps) => {
                // const {folderId} = routeProps.match.params;
                // const note = this.getNotes(this.state.notes, noteId);
                // const folder = this.getFolder(this.state.folder);
                // console.log(note, folder, folderId);
                return <SideBar
                  folders={this.state.folders}
                  notes={this.state.notes}
                  {...routeProps}/>
              }
            }/>
          })}
          <Route path="/" component={Main}/>
        </main>
      </div>
    );
  }
}

export default App;
