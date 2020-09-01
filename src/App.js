import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemIconMenu from './components/ItemIconMenu/ItemIconMenu'
import { faHome, faGift, faUpload, faMugHot, faCog } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="menu-bar">
        <ul>
          <li className="top-nav-bar"><ItemIconMenu icon={faHome} title="HOME"/></li>
          <li><ItemIconMenu icon={faGift} title="DEALS"/></li>
          <li><ItemIconMenu icon={faUpload} title="UPLOAD"/></li>
          <li><ItemIconMenu icon={faMugHot} title="WORK"/></li>
          <li><ItemIconMenu icon={faCog} title="SETTING"/></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
