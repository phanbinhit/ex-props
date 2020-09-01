import React, {Component} from 'react';
import './NavBar.css';
import ItemIconMenu from '../ItemIconMenu/ItemIconMenu';
import { faHome, faGift, faUpload, faMugHot, faCog } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faHome, faGift, faUpload,faMugHot, faCog);

class NavBar extends Component {
    render() {
        return(
            <div className="NavBar">
                <ul>
                    <li className="top-nav-bar"><ItemIconMenu icon={faHome} title="HOME"/></li>
                    <li><ItemIconMenu icon={faGift} title="DEALS"/></li>
                    <li><ItemIconMenu icon={faUpload} title="UPLOAD"/></li>
                    <li><ItemIconMenu icon={faMugHot} title="WORK"/></li>
                    <li><ItemIconMenu icon={faCog} title="SETTING"/></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;