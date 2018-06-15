import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupDetail from '../components/group_detail';

class GroupList extends Component{
  renderGroupDetail(groupData){
    console.log(groupData);
    const name = groupData.Key;
    return (
      <GroupDetail key={name}/>
    );
  }
  render(){
    return(
      <section id="group-list">
        <div className="group-list bg-light container-fluid text-center">
          <h2>Resultado dos jogos</h2>
          {this.props.groups.map(this.renderGroupDetail)}
        </div>
      </section>
    );
  };
}


function mapStateToProps({ groups }){
  return { groups };
}

export default connect(mapStateToProps)(GroupList);