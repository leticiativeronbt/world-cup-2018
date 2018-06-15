import React, { Component } from 'react';
import GroupList from '../containers/group_list';
import ShareRegion from './share_region';
import HeaderRegion from './header_region';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="site-header navbar navbar-expand-lg navbar-light bg-light">
          <div className="container d-flex flex-column flex-md-row justify-content-between">
          Placar da Copa do Mundo FIFA 2018
          </div>
      </nav>
      <HeaderRegion/>
      <GroupList/>
      <ShareRegion/>
      </div>
      );
  }
}
