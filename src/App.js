import React from 'react';
import logo from './logo.svg';
import './App.css';
import './NotesMain';
import Folder from './Folder';
import NotesMain from './NotesMain';
import dummyData from './dummystore';
import {Route, Link} from 'react-router-dom';

class App extends React.Component {
  state = {
    notes: dummyData.notes,
    folders: dummyData.folders
  }

  render (){
  return (
    
    <div className="App">
      <Route exact path={["/", "/folder/:folderId"]}
      render= {(routeProps)=> {
        return <Folder 
          folders = {this.state.folders}
          {...routeProps}/>
      }}/>
      <Route exact path={["/", "/folder/:folderId"]} 
      render= {(routeProps)=> {
        return <NotesMain 
          folders = {this.state.folders}
          notes = {this.state.notes}
          {...routeProps}/>
      }}/>
      
    </div>
  )};
}

export default App;
