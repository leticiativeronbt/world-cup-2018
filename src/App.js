import React, { Component } from 'react';
import GroupList from './containers/group_list';
import ShareRegion from './components/share_region';
import HeaderRegion from './components/header_region';
import HowWorksRegion from './components/how_works_region';
import logo from './logo.svg';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-light bg-light">
          <a href="#">
            <img src={logo} alt="logo placar da copa"/>
          </a>
        </nav>
        <HeaderRegion/>
        <HowWorksRegion/>
        <GroupList/>
        <ShareRegion/>
      </div>
      );
  }
}
