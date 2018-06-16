import React, { Component } from 'react';
import GroupList from '../containers/group_list';
import ShareRegion from './share_region';
import HeaderRegion from './header_region';
import HowWorksRegion from './how_works_region';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-light bg-light">
          <a href="#">
            <img src="../src/images/logo.png" alt=""/>
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
