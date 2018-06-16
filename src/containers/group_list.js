import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGroups } from '../actions/index';
import { fetchFlags } from '../actions/index';
import { bindActionCreators } from 'redux';
import GroupDetail from '../components/group_detail';

class GroupList extends Component{
  constructor(props){
    super(props);

    this.state = { groups: [], flags: [] };
    this.props.fetchGroups();
    this.props.fetchFlags();
  }

  renderList(){
    return this.props.groups.map((groupData) => {
      const group = groupData.group;
      return (
          <GroupDetail key={group.letter} group={group} flags={this.props.flags}/>
        );
    } );
  }
 
  render(){
    if(!this.props.groups || !this.props.flags)
      return (<div className="group-list bg-light container-fluid text-center"> Carregando... </div>);

    return(
      <section id="group-list">
        <div className="group-list bg-light container-fluid text-center">
          <h2>Resultado dos jogos</h2>
          {this.renderList()}
        </div>
      </section>
    );
  };
}


function mapStateToProps(state){
  console.log(state);
  return { 
    groups: state.groups.data,
    flags: state.flags.data
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchGroups, fetchFlags }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(GroupList);