import React, { Component } from 'react';
import GroupList from '../containers/group_list';
import ShareRegion from './share_region';
import HeaderRegion from './header_region';

export default class App extends Component {
  render() {
    return (
      <div>
      <h3>Placar da Copa</h3>
      <HeaderRegion/>
      <GroupList/>
      <ShareRegion/>
      </div>
    );
  }
}
