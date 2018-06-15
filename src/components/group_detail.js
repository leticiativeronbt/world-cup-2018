import React, { Component } from 'react';

export default class GroupDetail extends Component{
  constructor(props){
    super(props);
    
    this.state = { group: {} };
  }

  renderRows(){
    return this.props.group.teams.map((teamData) => 
      {
        var team = teamData.team;
        return (
          <tr key={team.fifa_code}>
            <td>{team.id}</td>
            <td>{team.fifa_code}</td>
            <td>{team.points}</td>
            <td>{team.goal_differential}</td>
          </tr>
        );
      }
    );
  }

  render(){
    return (
      <div>
        <h4>Group {this.props.group.letter}</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th>País</th>
              <th>Pontos</th>
              <th>Gols (Saldo)</th>
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