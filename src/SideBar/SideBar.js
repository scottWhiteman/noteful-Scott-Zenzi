import React from 'react';
import FolderList from '../FolderList/FolderList';

class SideBar extends React.Component {
    render() {
        return (
            <nav className="App__nav">
                <FolderList />
            </nav>
        );
    }
}

export default SideBar;