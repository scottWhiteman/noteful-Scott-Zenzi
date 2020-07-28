import React from 'react';
import { Link } from 'react-router-dom'

class FolderList extends React.Component {
    render() {
        const renderFolders = this.props.folders.map(folder => {
            if (this.props.selected === folder.id) {
                return <li className="selected"><Link to={`/folder/${folder.id}`}>{folder.name}</Link></li>
            }
            return <li><Link to={`/folder/${folder.id}`}>{folder.name}</Link></li>
        })
        return (
            <ul className="folders">
                {renderFolders}
            </ul>
        );
    }
}

export default FolderList;