import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchGroups } from '../actions/index';
import { fetchFlags } from '../actions/index';
import { fetchTeamResults } from '../actions/index';
import { bindActionCreators } from 'redux';

import GroupDetail from '../components/group_detail';

class GroupList extends Component{
  constructor(props){
    super(props);

    this.state = { groups: [], flags: [], teamResults: [] };
    this.props.fetchGroups();
    this.props.fetchFlags();
    this.props.fetchTeamResults();
  }

  renderList(){
    return this.props.groups.map((groupData) => {
      const group = groupData.group;
      const groupResults = this.props.teamResults.filter((team) => team.group_letter == group.letter);
      const sortedResults = groupResults.sort((a, b) => b.points - a.points);
      return (
          <GroupDetail key={group.letter} groupLetter={group.letter} flags={this.props.flags} teamResults={sortedResults}/>
        );
    } );
  }
 
  render(){
    if(!this.props.groups || !this.props.flags || !this.props.teamResults)
      return (<div className="group-list bg-light container-fluid text-center"> Carregando... </div>);

    return(
      <section id="group-list">
        <div className="group-list bg-light container-fluid text-center">
          <span className="display-5 text-lighter p-5">Resultado dos jogos</span>
          <div className="row">
            {this.renderList()}
          </div>
        </div>
      </section>
    );
  };
}


function mapStateToProps(state){
  return { 
    groups: state.groups.data,
    flags: state.flags.data,
    teamResults: state.teamResults.data
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchGroups, fetchFlags, fetchTeamResults }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(GroupList);