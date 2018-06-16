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