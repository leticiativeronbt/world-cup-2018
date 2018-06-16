import React, { Component } from 'react';

export default class GroupDetail extends Component{
  constructor(props){
    super(props);
    
    this.state = { group: {}, flags:{} };
  }

  renderRows(){
    return this.props.group.teams.map((teamData) => 
      {
        const team = teamData.team;
        const flag = this.props.flags.find((flag) => flag.name.startsWith(team.country));
        var flagPath = "";
        if(flag)
          flagPath=flag.flag;
        
        return (
          <tr key={team.fifa_code}>
            <td><img src={flagPath} width="32" height="20"/></td>
            <td><abbr title={team.country} class="initialism">{team.fifa_code}</abbr></td>
            <td>{team.points}</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>{team.goal_differential}</td>
          </tr>
        );
      }
    );
  }

  render(){
    return (
      <div className="col-sm-6">
        <h4>Grupo {this.props.group.letter}</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>P</th>
              <th>J</th>
              <th>V</th>
              <th>D</th>
              <th>GP</th>
              <th>GC</th>
              <th>SG</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    );
  }
}