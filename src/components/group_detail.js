import React, { Component } from 'react';

export default class GroupDetail extends Component{
  constructor(props){
    super(props);
    
    this.state = { groupLetter: '', teams: {}, teamResults: {} };
  }

  renderRows(){
    return this.props.teamResults.map((teamResult, index) => 
      {
        const team = this.props.teams.find((team) => team.fifa_code === teamResult.fifa_code);
        if(!team) return null

        const teste = team.fifa_code.slice(0,2)
        const flagPath = `https://www.countryflags.io/${teste}/flat/32.png`;
        const points = (teamResult.wins * 3) + teamResult.draws;
        return (
          <tr key={teamResult.fifa_code}>
            <td>{index+1}&#176;</td>
            <td><img src={flagPath} width="32" height="32" alt="bandeira"/></td>
            <td><abbr title={teamResult.country} className="initialism">{teamResult.fifa_code}</abbr></td>
            <td>{points}</td>
            <td>{teamResult.games_played}</td>
            <td>{teamResult.wins}</td>
            <td>{teamResult.draws}</td>
            <td>{teamResult.losses}</td>
            <td>{teamResult.goals_for}</td>
            <td>{teamResult.goals_against}</td>
            <td>{teamResult.goal_differential}</td>
          </tr>
        );
      }
    );
  }

  render(){
    return (
      <div className="col-sm-6 my-sm-2">
        <h5>Grupo {this.props.groupLetter}</h5>
        <table className="table table-hover table-sm">
          <colgroup>
            <col></col>
            <col></col>
            <col></col>
            <col className="bg-white" style={{width: "8%" }}></col>
            <col className="bg-light" style={{width: "8%" }}></col>
            <col className="bg-white" style={{width: "8%" }}></col>
            <col className="bg-light" style={{width: "8%" }}></col>
            <col className="bg-white" style={{width: "8%" }}></col>
            <col className="bg-light" style={{width: "8%" }}></col>
            <col className="bg-white" style={{width: "8%" }}></col>
            <col className="bg-light" style={{width: "8%" }}></col>
          </colgroup>
          <thead className="table-light">
            <tr>
              <th colSpan="3">Classificação</th>
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