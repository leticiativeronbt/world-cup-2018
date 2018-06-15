import React, { Component } from 'react';

export default class GroupDetail extends Component{
  render(groupData){
    console.log(groupData);
    return (
      <div>Group detail goes in here
        <table className="table table-hover">
          <thead>
            <tr>
            <th></th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    );
  }
}