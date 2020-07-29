import React from 'react';
import { Link } from 'react-router-dom';

class Folder extends React.Component {
  render() {
    const folderList = this.props.folders.map(folder => (
      <div>
        <Link to={`/folder/${folder.id}`}>
        {folder.name}
        </Link> 
      </div>
    ))
    return (
      <div>
        {folderList}
      </div>
    )

  }
}
export default Folder;