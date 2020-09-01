import React, { Component } from 'react';
import './ItemIconMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fal } from '@fortawesome/free-brands-svg-icons'
import { faHome, faGift, faUpload, faMugHot, faCog } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faGift, faUpload,faMugHot, faCog);

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
