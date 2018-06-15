import React, { Component } from 'react';
import { connect } from 'react-redux';

class GroupList extends Component{
  renderGroup(groupData){
    console.log(groupData);
    const name = groupData.city.Name;
    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    );
  }
  render(){
    return(
      <div className="jumbotron share-region bg-light container-fluid text-center">
      <h2>Resultado dos jogos</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Grupo</th>
          </tr>
        </thead>
        <tbody>
          {this.props.groups.map(this.renderGroup)}
        </tbody>
      </table>
    </div>
    );
  };
}


function mapStateToProps({ groups }){
  return { groups };
}

export default connect(mapStateToProps)(GroupList);