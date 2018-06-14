import React, { Component } from 'react';

export default class HeaderRegion extends Component{
  render(){
    return (
      <div className="div-header">
        <h2>Acompanhe aqui os resultados da Copa da Russia 2018!</h2>
        <button className="btn btn-success">Confira</button>
        <div className="row">
          <div className="col-6">
            <h2>Veja o resultado assim que o gol sair!</h2>
          </div>
          <div className="col-6">
            <img src=""/>
          </div>
        </div>
      </div>
    );
  }
}