import React from 'react';
import FolderList from '../FolderList/FolderList';

class SideBar extends React.Component {
    render() {
        let folderId = this.props.match.params.folderId
        return (
            <nav className="App__nav">
                <FolderList
                    folders={this.props.folders}
                    selected={folderId}/>
            </nav>
        );
    }
}

export default SideBar;