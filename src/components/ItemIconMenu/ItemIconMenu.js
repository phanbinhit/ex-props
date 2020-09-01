import React, { Component } from 'react';
import './ItemIconMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ItemIconMenu extends Component {
    render() {
        return (
            <div className="ItemIconMenu">
                <FontAwesomeIcon className="icon" icon={this.props.icon}/>
                <span>{this.props.title}</span>
            </div>
        )
    }
}

export default ItemIconMenu;
