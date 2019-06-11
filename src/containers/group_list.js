import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchGroups } from '../actions/index';
import { fetchTeams } from '../actions/index';
import { fetchTeamResults } from '../actions/index';
import { bindActionCreators } from 'redux';

import GroupDetail from '../components/group_detail';

export class GroupList extends Component{
  constructor(props){
    super(props);

    this.state = { groups: [], teams: [], teamResults: [] };
    this.props.fetchGroups();
    this.props.fetchTeams();
    this.props.fetchTeamResults();
  }

  renderList(){
    return this.props.groups.map((groupData) => {
      const group = groupData;
      const groupResults = this.props.teamResults.filter((team) => team.group_letter === group.letter);
      const sortedResults = groupResults.sort((a, b) => b.points - a.points);
      return (
          <GroupDetail key={group.letter} groupLetter={group.letter} teams={this.props.teams} teamResults={sortedResults}/>
        );
    } );
  }
 
  render(){
    if(!this.props.groups || !this.props.teams || !this.props.teamResults)
      return (
        <section id="group-list-empty">
          <div className="group-list bg-light container-fluid text-center"> Carregando... </div>
        </section>
      );

    return(
      <section id="group-list">
        <div className="group-list bg-light container-fluid text-center p-sm-5">
          <p className="display-6 font-weight-lighter">Resultado dos jogos</p>
          <div className="row">{this.renderList()}</div>
        </div>
      </section>
    );
  };
}


function mapStateToProps(state){
  if(!state.teams || !state.groups || !state.teamResults || !state.teams.data)
    return {};

  return { 
    groups: state.groups.data,
    teams: state.teams.data,
    teamResults: state.teamResults.data
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchGroups, fetchTeams, fetchTeamResults }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(GroupList);