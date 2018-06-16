import React, { Component } from 'react';

export default class GroupDetail extends Component{
  constructor(props){
    super(props);
    
    this.state = { groupLetter: '', flags: {}, teamResults: {} };
  }

  renderRows(){
    return this.props.teamResults.map((team) => 
      {
        const flag = this.props.flags.find((flag) => flag.fifaCode ==  team.fifa_code);
        const flagPath = flag.flag;
        
        return (
          <tr key={team.fifa_code}>
            <td><img src={flagPath} width="32" height="20"/></td>
            <td><abbr title={team.country} className="initialism">{team.fifa_code}</abbr></td>
            <td>{team.points}</td>
            <td>{team.games_played}</td>
            <td>{team.wins}</td>
            <td>{team.draws}</td>
            <td>{team.losses}</td>
            <td>{team.goals_for}</td>
            <td>{team.goals_against}</td>
            <td>{team.goal_differential}</td>
          </tr>
        );
      }
    );
  }

  render(){
    return (
      <div className="col-sm-6">
        <h4>Grupo {this.props.groupLetter}</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th><abbr title="Pontuação" className="initialism">P</abbr></th>
              <th><abbr title="Partidas Jogadas" className="initialism">J</abbr></th>
              <th><abbr title="Vitórias" className="initialism">V</abbr></th>
              <th><abbr title="Empates" className="initialism">E</abbr></th>
              <th><abbr title="Derrotas" className="initialism">D</abbr></th>
              <th><abbr title="Gols Pró (Realizados)" className="initialism">GP</abbr></th>
              <th><abbr title="Gols Contra (Sofridos)" className="initialism">GC</abbr></th>
              <th><abbr title="Saldo de Gols" className="initialism">SG</abbr></th>
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