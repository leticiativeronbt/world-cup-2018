import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGroups } from '../actions/index';
import { bindActionCreators } from 'redux';
import GroupDetail from '../components/group_detail';

class GroupList extends Component{
  constructor(props){
    super(props);

    this.state = { groups: [] };
    this.props.fetchGroups();
  }

  renderList(){
    return this.props.groups.map((groupData) => {
      const group = groupData.group;
      return (
          <GroupDetail key={group.letter} group={group}/>
        );
    } );
  }
 
  render(){
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


function mapStateToProps({ groups }){
  return { groups };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchGroups }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(GroupList);